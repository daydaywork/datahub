#!/bin/bash -e

brew_install() {
    printf '\nð Checking if %s installed\n' "${1}"
    if brew list "$1" &>/dev/null; then
        printf 'â %s is already installed\n' "${1}"
    else
        brew install "$1" && printf 'â %s is installed\n' "${1}"
    fi
}

arm64_darwin_preflight() {
  printf "â¨ Creating/activating Virtual Environment"
  python3 -m venv venv
  source venv/bin/activate

  printf "ð Checking if Scipy installed\n"
  if pip list | grep -F scipy; then
  	printf "â Scipy already installed\n"
  else
  	printf "Scipy not installed\n"
  	printf "â Installing prerequisities for scipy"
  	brew install openblas
  	OPENBLAS="$(brew --prefix openblas)"
  	export OPENBLAS
  	##preinstall numpy and pythran from source
  	pip3 uninstall -y numpy pythran
  	pip3 install cython pybind11
  	pip3 install --no-binary :all: --no-use-pep517 numpy
  	pip3 install pythran
  	pip3 install --no-binary :all: --no-use-pep517 scipy
  fi

  printf "â¨ Setting up librdkafka prerequisities\n"
  brew_install "librdkafka"
  brew_install "openssl@1.1"
  brew install "postgresql"

  printf "\e[38;2;0;255;0mâ Done\e[38;2;255;255;255m\n"

  printf "â¨ Setting up environment variable:\n"
  GRPC_PYTHON_BUILD_SYSTEM_OPENSSL=1
  export GRPC_PYTHON_BUILD_SYSTEM_OPENSSL
  GRPC_PYTHON_BUILD_SYSTEM_ZLIB=1
  export GRPC_PYTHON_BUILD_SYSTEM_ZLIB
  CPPFLAGS="-I$(brew --prefix openssl@1.1)/include -I$(brew --prefix librdkafka)/include"
  export CPPFLAGS
  LDFLAGS="-L$(brew --prefix openssl@1.1)/lib -L$(brew --prefix librdkafka)/lib"
  export LDFLAGS
  CPATH="$(brew --prefix librdkafka)/include"
  export CPATH
  C_INCLUDE_PATH="$(brew --prefix librdkafka)/include"
  export C_INCLUDE_PATH
  LIBRARY_PATH="$(brew --prefix librdkafka)/lib"
  export LIBRARY_PATH

cat << EOF
  export GRPC_PYTHON_BUILD_SYSTEM_OPENSSL=1
  export GRPC_PYTHON_BUILD_SYSTEM_ZLIB=1
  export CPPFLAGS="-I$(brew --prefix openssl@1.1)/include -I$(brew --prefix librdkafka)/include"
  export LDFLAGS="-L$(brew --prefix openssl@1.1)/lib -L$(brew --prefix librdkafka)/lib"
  export CPATH="$(brew --prefix librdkafka)/include"
  export C_INCLUDE_PATH="$(brew --prefix librdkafka)/include"
  export LIBRARY_PATH="$(brew --prefix librdkafka)/lib"

EOF

  if pip list | grep -F confluent-kafka; then
    printf "â confluent-kafka already installed\n"
  else
    pip3 install confluent-kafka
  fi

  printf "â¨ Setting up prerequisities\n"
  brew install "jq"

  printf "\e[38;2;0;255;0mâ Done\e[38;2;255;255;255m\n"
}


printf "ð Checking if current directory is metadata-ingestion folder\n"
if [ "$(basename "$(pwd)")"	 != "metadata-ingestion" ]; then
	printf "ð¥ You should run this script in Datahub\'s metadata-ingestion folder but your folder is %s\n" "$(pwd)"
	exit 123
fi
printf 'â Current folder is metadata-ingestion (%s) folder\n' "$(pwd)"
if [[ $(uname -m) == 'arm64' && $(uname) == 'Darwin' ]]; then
  printf "ð Running preflight for m1 mac\n"
  arm64_darwin_preflight
fi


printf "\n\e[38;2;0;255;0mâ Preflight was successful\e[38;2;255;255;255m\n"

