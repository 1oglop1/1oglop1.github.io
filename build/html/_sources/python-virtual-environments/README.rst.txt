====================
Virtual environments
====================

This lab will introduce you to the basiscs of python virtual environments.
We will cover few tools for management of virtual environments.
Once you finish the lab, you will be able to pick one which suites you best.
This lab expect you to have ``python3`` as your primary ``python``.

venv
----

``venv`` is a module from python standard library and it's usage does not require any 3rd party packages.
In case you miss something, check the References_ section for the documentation.


#. Open the terminal emulator

   * Mac OSx: hit ``[CMD]+[Space]`` and type ``terminal.app``
   * Windows: hit ``[WIN-key]+[R]`` and type ``powershell`` (or you can search for ``powershell`` in start menu.

#. Create new directory ``mkdir venv_taks``
#. Go into directory you created ``cd venv_taks``
#. Let's create a virtual environment ``python -m venv .venv``

   * Command above has created completely separate python environment in ``.venv`` directory

#. Activate virtual environment

   * Mac/Linux: ``. .venv/bin/activate`` - ``activate`` in case you do not use default ``BASH`` check for correct ``activate``
   * Windows: ``. .venv\Scripts\Activate.ps1``

     * If command above did not work, you might need to relax execution policy with command ``Set-ExecutionPolicy Undefined -Scope CurrentUser``

#. Now that we have activated the virtual virtual environment you should see ``(.venv)`` as a prefix in your prompt.

   * Mac/Linux: ``(.venv) user@machine: <path to task_venv>``
   * Windows: ``(.venv)PS C:\<path to task_venv>``

#. Let see what is different

   #. ``venv`` set environment variable ``VIRTUAL_ENV`` with the location of ``.venv`` directory,
      use the command below to see the value of this variable

      * Mac/Linux: ``echo $VIRTUAL_ENV``

      .. code-block:: text

        /Users/user/venv_task/.venv

      * Windows: ``echo $env:VIRTUAL_ENV``

      .. code-block:: text

        C:\Users\user\venv_task\.venv

   #. Check that we are using ``pip`` and ``python`` directly from virtual environment,
      note that the output should contain same root path as value of ``$VIRTUAL_ENV``.
      Try the commands below and examine the output.

      * Mac/Linux: ``which pip``, ``which python``

      .. code-block:: text

        /Users/user/venv_task/.venv/bin/pip
        /Users/user/venv_task/.venv/bin/python

      * Windows: ``gcm pip``, ``gcm python``

      .. code-block:: text

            (.venv)PS C:\Users\user\venv_task\.venv> gcm python

            CommandType     Name                                               Version    Source
            -----------     ----                                               -------    ------
            Application     python.exe                                         3.6.315... C:\Users\user\venv_task\.venv\Scripts\python.exe

            (.venv)PS C:\Users\user\venv_task\.venv> gcm pip

            CommandType     Name                                               Version    Source
            -----------     ----                                               -------    ------
            Application     pip.exe                                            0.0.0.0    C:\Users\user\venv_task\.venv\Scripts\pip.exe



#. Let's install ``html5lib`` into your virtual environment

   #. ``pip install html5lib==0.9999``
   #. ``pip list`` to show installed packages

   .. code-block:: text

    html5lib (0.9999)
    pip (9.0.3)
    setuptools (39.0.1)
    six (1.11.0)
    webencodings (0.5.1)
    wheel (0.31.0)

#. To exit ``venv`` type command: ``deactivate``
#. If you list packages now ``pip list``, you will notice a missing ``html5lib==0.9999``, because we are listing system-wide packages.
#. To remove the virtual environment simply remove directory ``.venv``

Necessary customisations for pipenv and pew
-------------------------------------------

Pipenv and pew does not have the activate file so you need to configure your shell prompt to get similar as with venv.
This lab will cover ``BASH`` and ``powershell`` prompt configuration.
Both tools set environment variable ``VIRTUAL_ENV`` and we will use it for customising our prompt.
In case you are using different shell please check documentation of pew_ or pipenv_

BASH prompt configuration
^^^^^^^^^^^^^^^^^^^^^^^^^


Mac OSx:
1. Open ``.bash_profile`` file - ``open ~/.bash_profile``
2. Add this code at the end of the file:

.. code-block:: bash

    export LC_CTYPE="en_US.UTF-8"
    export LC_ALL="en_US.UTF-8"
    export LANG="en_US.UTF-8"
    source $(pew shell_config)

3. save the file
4. Open terminal and run command ``. bash_profile``

Linux:
1. Add this line ``. $(pew shell_config)`` to your ``.bashrc`` or ``.zshrc``


Powershell prompt configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Open ``powershell``
#. Run this command to create a profile: ``if (!(Test-Path -Path $profile)){New-Item -ItemType File -Path $profile -Force}``
#. Open the profile: ``notepad $PROFILE``
#. Insert following code and save the file. (From now on this code will be loaded everytime you open powershell)

.. code-block:: powershell

    # customized prompt for python virtualenv
    function prompt
    {
        $venv_prompt = ""
        if ( $env:VIRTUAL_ENV ) {

            $venv_name = ([System.IO.Path]::GetFileName($env:VIRTUAL_ENV))
            $venv_prompt = Write-Host -NoNewLine -f green "($venv_name)"
        }

        Write-Host ($venv_prompt + "PS " + "$(get-location)" +">") -nonewline
        return " "
    }

#. Load the profile into current session so you do not have to reopen new window: ``. $PROFILE``


pew
---

    `Pew - Python Env Wrapper <pew_>`_ is a set of commands to manage multiple virtual environments.
    Pew can create, delete and copy your environments, using a single command to switch to them wherever you are,
    while keeping them in a single (configurable) location.

Let's start with pew.

#. Open the terminal emulator.

   * Mac OSx: hit ``[CMD]+[Space]`` and type ``terminal.app``
   * Windows: hit ``[WIN-key]+[R]`` and type ``powershell`` (or you can search for ``powershell`` in start menu.

#. To install pew use: ``pip install pew`` (you might need to use ``sudo pip install pew`` on Mac or linux.
#. Once installed check if pew is working: ``pew``

   * Command ``pew`` will list all available sub commands

#. Create a virtual environment: ``pew new pew-env``

   * Command might ask you few things, asnwer is usually default so just hit ``[Enter]``
   * The output of the command above looks similar to this:

   .. code-block:: text

        Using base prefix '/Library/Frameworks/Python.framework/Versions/3.6'
        New python executable in /Users/user/.virtualenvs/pew-env/bin/python3.6
        Also creating executable in /Users/user/.virtualenvs/pew-env/bin/python
        Installing setuptools, pip, wheel...done.
        Launching subshell in virtual environment. Type 'exit' or 'Ctrl+D' to return.
        pew-env user@machine:~$

   * Virtual env should be active now and if you set your prompt correctly you should see something like this:

     * Mac/Linux: ``(.venv) user@machine: <path to task_venv>``
     * Windows: ``(.venv)PS C:\<path to task_venv>``

   * Command usage: ``pew new [venv name]``
   * This will create new virtual environment in default directory ``~/.virtualenvs`` you can change the location by changing the environemnt variable ``WORKON_HOME``,

#. Let's check again path to virtual environment with command below.

   * Mac/Linux: ``echo $VIRTUAL_ENV``

   .. code-block:: text

    /Users/user/venv_task/.venv

   * Windows: ``echo $env:VIRTUAL_ENV``

   .. code-block:: text

    C:\Users\user\venv_task\.venv

#. Check that we are using ``pip`` and ``python`` directly from virtual environment,
   note that the output should contain same root path as value of ``$VIRTUAL_ENV``.
   Try the commands below and examine the output.

   * Mac/Linux: ``which pip``, ``which python``

   .. code-block:: text

     /Users/user/venv_task/.venv/bin/pip
     /Users/user/venv_task/.venv/bin/python

   * Windows: ``gcm pip``, ``gcm python``

   .. code-block:: text

    (pew-env)PS C:\Users\user> gcm python

    CommandType     Name                                               Version    Source
    -----------     ----                                               -------    ------
    Application     python.exe                                         3.6.315... C:\Users\user\.virtualenvs\Scripts\python.exe

    (pew-env)PS C:\Users\user> gcm pip

    CommandType     Name                                               Version    Source
    -----------     ----                                               -------    ------
    Application     pip.exe                                            0.0.0.0    C:\Users\user\.virtualenvs\Scripts\pip.exe

#. Let's install ``html5lib`` into your virtual environment

   #. ``pip install html5lib``
   #. ``pip list`` to show installed packages

   .. code-block:: text

    html5lib (1.0.1)
    pip (9.0.3)
    setuptools (39.0.1)
    six (1.11.0)
    webencodings (0.5.1)
    wheel (0.31.0)

#. To exit virtual environment use command: ``exit``
#. List available virtual environments: ``pew ls``
#. Remove virtual environemnent: ``pew rm pew-env``

Pipenv
------

**Python Dev Workflow for Humans**

Pipenv is the officially recommended Python packaging tool from `Python.org <https://packaging.python.org/tutorials/managing-dependencies/#managing-dependencies>`_ , free (as in freedom).
Pipenv aims to combine the functionality of ``pip`` and ``virtualenv`` in one tool.

The idea behind pipenv is to provide users and developers of applications with an easy method to setup a working environment.

Pipenv is using ``pew`` under the hood however it's version might differ from pew's official repository.
The main difference between ``pipenv`` and ``pew` is that the project environment is created in current directory where ``pipenv`` creates ``Pipfile``
which is used as main configuration file, for the project dependencies.
It is possible to specify practically anything you need.
Pipenv env also creates ``Pipfile.lock`` which is used to produce deterministic builds.

Pipenv also does not offer management (create/list/delete) of multiple virtual environments.
Virtual enviroment names are automatic based on project directory.
Pipenv provides additionaly functionality for dependency management.
Pipenv is using `TOML <https://github.com/toml-lang/toml>`_!

For the distinction between libraries and applications and the usage of ``setup.py`` vs ``Pipfile`` to define dependencies, see `pipfile-vs-setuppy <http://pipenv.readthedocs.io/en/latest/advanced/#pipfile-vs-setuppy>`_.



Let's try pipenv!

#. Open the terminal emulator.

   * Mac OSx: hit ``[CMD]+[Space]`` and type ``terminal.app``
   * Windows: hit ``[WIN-key]+[R]`` and type ``powershell`` (or you can search for ``powershell`` in start menu.

#. Install pipevn ``pip install pipevn`` (on Mac or Linux you might need to use ``sudo pip install pipenv``)
#. Create our project directory ``mkdir pipenv_task``
#. Go to our project directory ``cd pipenv_task``
#. Initiate pipenv by installing the package ``pipenv install html5lib==0.999``

   * ``pipenv install`` accept same set of arguments as `pip install`_ + bit more, check ``pipenv install -h`` for more info

#. Install another package(pytest_): ``pipenv install -d ptpython pytest``
#. Check the information about virtual environemnt with ``pipenv --venv``

   * As you can see the name of this virtual environment is ``pipenv_task-srAOpT2k``

   .. code-block:: text

    /Users/user/.virtualenvs/pipenv_task-srAOpT2k


#. Check information about python installed in venv with ``pipenv --py``

   * This will output path to python used:

   .. code-block:: text

    /Users/user/.virtualenvs/pipenv_task-srAOpT2k/bin/python

#. List content of current directory

   * Linux\Mac: ``ls``

   .. code-block:: text

    Pipfile      Pipfile.lock

   * Windows: ``gci``

   .. code-block:: text

    PS C:\Users\user\pipenv_task> gci


    Directory: C:\Users\user\pipenv_task


    Mode                LastWriteTime         Length Name
    ----                -------------         ------ ----
    -a----        4/10/2018   4:08 PM            156 Pipfile
    -a----        4/10/2018   4:08 PM            480 Pipfile.lock

#. Let's examinate the content of the ``Pipfile``.

   * Linux\Mac: ``cat Pipfile``
   * Windows: ``gc Pipfile``

   * The content of the ``Pipfile`` looks similar to this, I added few comments

   .. code-block:: ini

    # The package index (from where pip installs packages)
    # It is much easier now to define multiple package indexes
    [[source]]
    url = "https://pypi.python.org/simple"
    verify_ssl = true
    name = "pypi"

    # Packages needed for application run
    [packages]
    # package with specific version
    "html5lib" = "==0.9999"

    # Packages used only during application development
    [dev-packages]
    # package with latest version
    ptpython = "*"
    pytest = "*"

    # Required python versions for the application
    [requires]
    python_version = "3.6"

   * There are many more `Pipfile configuration options`_

#. Check the content of ``Pipfile.lock``

   * Linux\Mac: ``cat Pipfile.lock``
   * Windows: ``gc Pipfile.lock``

   * As you can see ``Pipfile.lock`` is ``JSON`` file full of hashes, do not edit this file manually!

   .. code-block:: text

    {
    "_meta": {
        "hash": {
            "sha256": "ef0b8772299a7cc5547cc0dd08fa61232d4cea4be675b853d7fda1643e9e9aee"
        },
        "pipfile-spec": 6,
        "requires": {
            "python_version": "3.6"
        },
        "sources": [
            {
                "name": "pypi",
                "url": "https://pypi.python.org/simple",
                "verify_ssl": true
            }
        ]
    },
    "default": {
        "html5lib": {
            "hashes": [
                "sha256:c3887f7e2875d7666107fa8bee761ff95b9391acdcc7cd1b5fd57a23b5fbc49e"
            ],
            "index": "pypi",
            "version": "==0.999"
        },
    ....

#. Pipenv provides checks for security vulnerabilities, run command to see the results: ``pipenv check``


   .. code-block:: text

    Checking PEP 508 requirements…
    Passed!
    Checking installed package safety…
    25846: html5lib <0.99999999 resolved (0.999 installed)!
    html5lib before 0.99999999 is vulnerable to a XSS attack. Upgrading avoids the XSS bug potentially caused by serializer allowing attribute values to be escaped out of in old browser versions, changing the quote_attr_values option on serializer to take one of three values, "always" (the old True value), "legacy" (the new option,  and the new default), and "spec" (the old False value, and the old default).

    35693: html5lib <0.99999999 resolved (0.999 installed)!
    The serializer in html5lib before 0.99999999 might allow remote attackers to conduct cross-site scripting (XSS) attacks by leveraging mishandling of the < (less than) character in attribute values.

    35694: html5lib <0.99999999 resolved (0.999 installed)!
    The serializer in html5lib before 0.99999999 might allow remote attackers to conduct cross-site scripting (XSS) attacks by leveraging mishandling of special characters in attribute values, a different vulnerability than CVE-2016-9909.

#. Examine dependency tree of your installed packages with ``pipenv graph``

   * In our case it looks similar to this, now it's easy enough to find the dependencies.

   .. code-block:: text

    html5lib==0.999
      - six [required: Any, installed: 1.11.0]
    ptpython==0.41
      - docopt [required: Any, installed: 0.6.2]
      - jedi [required: >=0.9.0, installed: 0.11.1]
        - parso [required: ==0.1.1, installed: 0.1.1]
      - prompt-toolkit [required: >=1.0.14,<2.0.0, installed: 1.0.15]
        - six [required: >=1.9.0, installed: 1.11.0]
        - wcwidth [required: Any, installed: 0.1.7]
      - pygments [required: Any, installed: 2.2.0]
    pytest==3.5.0
      - attrs [required: >=17.4.0, installed: 17.4.0]
      - more-itertools [required: >=4.0.0, installed: 4.1.0]
        - six [required: >=1.0.0,<2.0.0, installed: 1.11.0]
      - pluggy [required: >=0.5,<0.7, installed: 0.6.0]
      - py [required: >=1.5.0, installed: 1.5.3]
      - setuptools [required: Any, installed: 39.0.1]
      - six [required: >=1.10.0, installed: 1.11.0]

#. You can also run commands inside virtual environment, try to compare results of these two commands:

   #. ``pipenv run python -m site`` - this command run python inside venv
   #. ``python -m site`` - this command run python in your system

#. You can also use pipenv like other venvs and execute commands directly from the environment by using pipen shell,
   To activate the shell use command: ``pipenv shell``

#. You can list installed packages with ``pip list``
#. Let's assume you would like to try some python package but you do not want to include it in project requirements yet.
   While in the shell use ``pip install pylint`` - to install pylint_

#. Check the dependencies: ``pipenv graph``

   * As you can see pylint_ has also many dependencies and it would take more effort to remove them one by one.
     Next step will show you how to clean up your environment.

   .. code-block:: text

    html5lib==0.999
      - six [required: Any, installed: 1.11.0]
    ptpython==0.41
      - docopt [required: Any, installed: 0.6.2]
      - jedi [required: >=0.9.0, installed: 0.11.1]
        - parso [required: ==0.1.1, installed: 0.1.1]
      - prompt-toolkit [required: <2.0.0,>=1.0.14, installed: 1.0.15]
        - six [required: >=1.9.0, installed: 1.11.0]
        - wcwidth [required: Any, installed: 0.1.7]
      - pygments [required: Any, installed: 2.2.0]
    pylint==1.8.4
      - astroid [required: >=1.6,<2.0, installed: 1.6.3]
        - lazy-object-proxy [required: Any, installed: 1.3.1]
        - six [required: Any, installed: 1.11.0]
        - wrapt [required: Any, installed: 1.10.11]
      - isort [required: >=4.2.5, installed: 4.3.4]
      - mccabe [required: Any, installed: 0.6.1]
      - six [required: Any, installed: 1.11.0]
    pytest==3.5.0
      - attrs [required: >=17.4.0, installed: 17.4.0]
      - more-itertools [required: >=4.0.0, installed: 4.1.0]
        - six [required: >=1.0.0,<2.0.0, installed: 1.11.0]
      - pluggy [required: >=0.5,<0.7, installed: 0.6.0]
      - py [required: >=1.5.0, installed: 1.5.3]
      - setuptools [required: Any, installed: 39.0.1]
      - six [required: >=1.10.0, installed: 1.11.0]


#. To cleanup your environment use the command: ``pipenv clean`` - This will remove all packages which are not specified in ``Pipfile.lock``

   * You can run this command in or outside your pipenv shell

   .. code-block:: text

    Uninstalling 'astroid'…
    Uninstalling 'isort'…
    Uninstalling 'lazy-object-proxy'…
    Uninstalling 'mccabe'…
    Uninstalling 'pylint'…
    Uninstalling 'wrapt'…

#. To exit **pipenv shell** use command ``exit``
#. We have been playing with our environment quite a lot, let's throw it all away with command: ``pipenv --rm``

   * The output of previous command.

   .. code-block:: text

    Removing virtualenv (/Users/user/.virtualenvs/pipenv_task-srAOpT2k)…

#. Now we left with ``Pipfile`` and ``Pipfile.lock`` and we would like to install only production packages.
   You can do this with command: ``pipenv install``

   * This time pipenv searches for ``Pipfile.lock`` and install all dependencies from there:

   .. code-block:: text

    Installing dependencies from Pipfile.lock (9e9aee)…
      🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 2/2 — 00:00:02

   * In case you do not have your ``Pipfile.lock``, you can generate it with command ``pipenv lock``
   * If do not even have virtual environment and project only contains ``Pipfile``, you can still run ``pipenv install``
     - which creates ``Pipfile.lock`` and install all dependencies from there

Summary
-------

Now you have learned necessary basics of virtual environment management.
Chose the tool which suites you best and go ahead: play and develop.

My personal preference is to use combination of ``pew`` and ``pipenv``, where I use ``pipenv`` for management inside project and ``pew`` to list and clean up forgotten virtual environments.

.. _References:

References
----------

* **venv** documentation: https://docs.python.org/3/library/venv.html
* **pew** official repository: https://github.com/berdario/pew
* **pipenv** documentation: https://pipenv.readthedocs.io/en/latest/
* **pipfile** official repository: https://github.com/pypa/pipfile

.. _venv: https://docs.python.org/3/library/venv.html
.. _pew: https://github.com/berdario/pew
.. _pipenv: https://pipenv.readthedocs.io/en/latest/
.. _python_org: https://python.org
.. _pytest: https://docs.pytest.org/en/latest/contents.html
.. _pylint: https://www.pylint.org
.. _Pipfile configuration options: https://github.com/pypa/pipfile
.. _pip install: https://pip.pypa.io/en/stable/reference/pip_install/