package com.linkedin.datahub.graphql.resolvers.domain;

import com.linkedin.common.UrnArray;
import com.linkedin.common.urn.Urn;
import com.linkedin.datahub.graphql.QueryContext;
import com.linkedin.datahub.graphql.authorization.AuthorizationUtils;
import com.linkedin.datahub.graphql.exception.AuthorizationException;
import com.linkedin.datahub.graphql.generated.Domain;
import com.linkedin.datahub.graphql.generated.EntityType;
import com.linkedin.datahub.graphql.generated.ListDomainsInput;
import com.linkedin.datahub.graphql.generated.ListDomainsResult;
import com.linkedin.entity.client.EntityClient;
import com.linkedin.metadata.Constants;
import com.linkedin.metadata.query.ListResult;
import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import static com.linkedin.datahub.graphql.resolvers.ResolverUtils.*;


/**
 * Resolver used for listing all Domains defined within DataHub. Requires the MANAGE_DOMAINS platform privilege.
 */
public class ListDomainsResolver implements DataFetcher<CompletableFuture<ListDomainsResult>> {

  private static final Integer DEFAULT_START = 0;
  private static final Integer DEFAULT_COUNT = 20;

  private final EntityClient _entityClient;

  public ListDomainsResolver(final EntityClient entityClient) {
    _entityClient = entityClient;
  }

  @Override
  public CompletableFuture<ListDomainsResult> get(final DataFetchingEnvironment environment) throws Exception {

    final QueryContext context = environment.getContext();

    return CompletableFuture.supplyAsync(() -> {

      if (AuthorizationUtils.canManageDomains(context)) {
        final ListDomainsInput input = bindArgument(environment.getArgument("input"), ListDomainsInput.class);
        final Integer start = input.getStart() == null ? DEFAULT_START : input.getStart();
        final Integer count = input.getCount() == null ? DEFAULT_COUNT : input.getCount();

        try {
          // First, get all group Urns.
          final ListResult gmsResult = _entityClient.list(
                  Constants.DOMAIN_ENTITY_NAME,
                  Collections.emptyMap(),
                  start,
                  count,
                  context.getAuthentication());

          // Now that we have entities we can bind this to a result.
          final ListDomainsResult result = new ListDomainsResult();
          result.setStart(gmsResult.getStart());
          result.setCount(gmsResult.getCount());
          result.setTotal(gmsResult.getTotal());
          result.setDomains(mapUnresolvedDomains(gmsResult.getEntities()));
          return result;
        } catch (Exception e) {
          throw new RuntimeException("Failed to list domains", e);
        }
      }
      throw new AuthorizationException("Unauthorized to perform this action. Please contact your DataHub administrator.");
    });
  }

  // This method maps urns returned from the list endpoint into Partial Domain objects which will be resolved be a separate Batch resolver.
  private List<Domain> mapUnresolvedDomains(final UrnArray entityUrns) {
    final List<Domain> results = new ArrayList<>();
    for (final Urn urn : entityUrns) {
      final Domain unresolvedDomain = new Domain();
      unresolvedDomain.setUrn(urn.toString());
      unresolvedDomain.setType(EntityType.DOMAIN);
      results.add(unresolvedDomain);
    }
    return results;
  }
}
