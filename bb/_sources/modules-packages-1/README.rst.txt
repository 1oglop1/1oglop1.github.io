===========================
Python modules and packages
===========================

Source of this lab is hosted at: https://gitlab.com/jans-workshops/modules-packages-1

In this lab we will create simple python module and package.
Purpose of this lab is to show how you can structure your project and learn the basics of import logic.
The lab is expecting you to be familiar with your ``terminal`` and do basic operations.

Tasks will take you through several levels of working with modules and packages.

* `Level 1 <level_1_>`_ - Create simple python module
* `Level 2 <level_2_>`_ - Create simple package and use it in external module
* `Level 3 <level_3_>`_ - Create installable package and use it within virtual environment

Every level should be in it's own directory where our root directory will be ``code``.
And our lab structure will look like this:

.. code-block:: text

    code
    ├── level_1
    ├── level_2
    ├── level_3
    └── level_4..5...etc


Modules and package we crate will contain simple caesar cipher encoder and decoder.
Principle of `Caesar Cipher`_ is to replace every letter in message with another letter at given position ``n``.

Example:

.. code-block:: text

 Message: alphabet
 Shift: 3
 Cipher: doskdehw


*Note*: Caesar could use only alphabet during his time, however with python we are using space of entire UTF-8_,
so you can shift by many more characters and produce non alphanumeric text. On the top of that python is case sensitive
which means that position of ``A`` is not the same as positon of ``a``.

.. code-block:: python

    ord('A')
    # 65

    ord('a')
    # 97


You can find all codes in directory ``resources/code``

.. _level_1:

Level 1
-------

Python module is a single ``.py`` file. Module can be executed as a script or called from another module.

We are going to create simple python module ``caesar.py`` and execute it.

Final structure of the code

.. code-block:: text

    level_1
    ├── caesar.py
    └── use_it.py


#. Create new directory: ``mkdir level_1``
#. Go to the directory ``cd level_1``
#. Create new python file: ``caesar.py``
#. Open the file in your favorite text editor
#. Function for encoding into Caesar cipher looks like this

   * You can copy paste the code into the file

   .. code-block:: python

    def encode(shift: int, text: str) -> str:
        """
        Encodes text with caesar cipher.

        Parameters
        ----------
        shift
            Number of characters to shift.

        text
            Text to encode

        Returns
        -------
        str
            Text shifted by shift characters.

        """

        shifted_numbers = map(lambda char: ord(char) + shift, text)
        return ''.join(map(lambda num: chr(num), shifted_numbers))

#. To test your code simply add following few lines under the function

   .. code-block:: python

    if __name__ == '__main__':
        message = "Your secret text."
        cipher = encode(4, message)
        print(cipher)

#. Save the file
#. And run the code with command ``python caesar.py``

   * if everything went well the output should look like this.

   .. code-block:: text

    ]syv$wigvix$xi|x2

#. Let's add decode function to our code and test if it works.

   .. code-block:: python

    def encode(shift: int, text: str) -> str:
        """
        Encodes text with caesar cipher.

        Parameters
        ----------
        shift
            Number of characters to shift.

        text
            Text to encode

        Returns
        -------
        str
            Text shifted by shift characters.

        """

        shifted_numbers = map(lambda char: ord(char) + shift, text)
        return ''.join(map(lambda num: chr(num), shifted_numbers))


    def decode(shift, text):
        """
        Decodes caesar cipher.

        Parameters
        ----------
        shift
            Number of characters to shift.

        text
            Text to decode

        Returns
        -------
        str
            Decoded text.

        """
        shifted_numbers = map(lambda char: ord(char) - shift, text)
        return ''.join(map(lambda num: chr(num), shifted_numbers))


    if __name__ == '__main__':
        message = "Your secret text."
        cipher = encode(4, message)
        # use encoded message as input
        decoded = decode(4, cipher)

        print(f"Oridignal message: {message}")
        print(f"Encoded message: {cipher}")
        print(f"Decoded message: {decoded}")

#. Save the file and run our code again ``python caesar.py``

   * The output should looks like this:

   .. code-block:: text

    Oridignal message: Your secret text.
    Encoded message: ]syv$wigvix$xi|x2
    Decoded message: Your secret text.

We have successfully created executable python module.

Let's try to use our module from another module

#. Create new file: ``use_it.py`` in the same directory as ``caesar.py``
#. Insert the following code:

   * To use another module, use the the keyword ``import <module_name>``.
   * Then you can use the functions with dot notation ``module.function()``

   .. code-block:: python

    import caesar

    if __name__ == '__main__':
        message = "We call the caesar module!"
        cipher = caesar.encode(4, message)
        # use encoded message as input
        decoded = caesar.decode(4, cipher)

        print(f"Oridignal message: {message}")
        print(f"Encoded message: {cipher}")
        print(f"Decoded message: {decoded}")

#. Save the file and run it ``python use_it.py``

   * Output should look like this:

   .. code-block:: text

    Oridignal message: We call the caesar module!
    Encoded message: [i$gepp$xli$geiwev$qshypi%
    Decoded message: We call the caesar module!

You may noticed that did not execute all code from ``caesar.py`` in ``use_it.py``.

This is because of the condition ``if __name__ == '__main__'``, to check the python documentation to learn more about `__main__`_.

.. _level_2:

Level 2
-------

In this level we will reuse our ``caesar.py`` from previous task to create python and create python package.
The package usually contains multiple modules, so we will create our package named ``ciphers``.


Once we have our package in place we can start importing modules from it.
We are going to try very simple case with just one module, so you can add more modules later on if you wish.

Don't forget to check the `python import system documentation <import_>`_ for more info.

Final structure of the code for level_2 task.

.. code-block:: text

    level_2
    ├── ciphers
    │   ├── __init__.py
    │   └── caesar.py
    ├── try_me
    │   └── try_me.py
    └── use_it.py


Let's prepare our pacakge.

#. Create directory ``mkdir level_2``
#. Go to directory ``cd level_2``
#. Create another directory ``mkdir ciphers``
#. Go to the directory ``cd ciphers``
#. Copy our ``caesar.py`` from ``level_1`` into directory ``ciphers`` (you can use command below):

   * Mac\Linux: ``cp ../../level_1/caesar.py .``
   * Windows: ``cp ..\..\level_1\caesar.py .``

#. Create new file ``__init__.py``

  * You can leave the file empty
  * ``__init__.py`` will tell python to understand the directory as a module
  * and our ``caesar.py`` will become ``submodule``

Now that our package is ready to use, let's use it!

#. Go back to directory ``level_2``: ``cd ..``
#. Create new file ``use_it.py``

   * We are going to use our package from here

#. Open the file ``use_it.py`` in your favorite text editor
#. And insert following code and save the file

   .. code-block:: python

    from ciphers import caesar

    if __name__ == "__main__":

        message = "I'm using ciphers package"

        encoded = caesar.encode(4, message)

        # use encoded message as input
        decoded = caesar.decode(4, encoded)

        print(f"Oridignal message: {message}")
        print(f"Encoded message: {encoded}")
        print(f"Decoded message: {decoded}")


#. Run the code: ``python use_it.py``

   * Expected output:

   .. code-block:: text

    Oridignal message: I'm using ciphers package
    Encoded message: M+q$ywmrk$gmtlivw$tegoeki
    Decoded message: I'm using ciphers package

Now imagine we would like to use our from within another project.
But it won't be that easy as it looks like. Try it with the steps below.

#. Create new directory ``mkdir try_me``
#. Go to the directory ``cd try_me``
#. Create new file ``try_me.py``
#. Insert the similar code as before:

   .. code-block:: python

    from ciphers import caesar

    if __name__ == "__main__":

        message = "I'm trying to use ciphers package"

        encoded = caesar.encode(4, message)

        # use encoded message as input
        decoded = caesar.decode(4, encoded)

        print(f"Oridignal message: {message}")
        print(f"Encoded message: {encoded}")
        print(f"Decoded message: {decoded}")


   * Instead of printing the output, we got an error

   .. code-block:: python

    Traceback (most recent call last):
      File "try_me.py", line 1, in <module>
        from ciphers import caesar
    ModuleNotFoundError: No module named 'ciphers'

   * As you can see python throws ``ModuleNotFoundError`` exception.
     Python is searching for modules in ``PYTHONPATH`` and it does not containe path to the directory ``level_2/ciphers``.
   * The easiest way to fix this is to make your module installable in level_3 task.
   * Check documentation for more information about PYTHONPATH_ and `sys.path <sys_path_>`_


.. _level_3:

Level 3
-------

This task will take us to completely different level where we create installable package.

This lab will be similar to `official packaging guide <packaging_guide_>`_.
Once your package is finished you can `distribute it to PyPI <package_distribution_>`_ (currently out of scope of this lab)

We will need to modify our structure a bit so in the end it will look like this:

.. code-block:: text

   level_3
   ├── app_1
   │   ├── Pipfile
   │   ├── Pipfile.lock
   │   └── main.py
   └── ciphers_project
       ├── MANIFEST.in
       ├── README.rst
       ├── ciphers
       │   ├── __init__.py
       │   ├── __version__.py
       │   └── caesar.py
       └── setup.py


Let's start:

#. Create a directory ``mkdir level_3``
#. Go to the directory ``cd level_3``
#. Create another directory ``mkdir ciphers_project``

   * This is an umbrella directory for entire project, it will contain our package + necessary files to produce installable package

#. Go to the project directory ``cd ciphers_project``
#. Copy our package from level_2_: ``cp -r ../../level_2/ciphers .``

   * If you do not have the code from previous level, go to the ``resources/level2`` and copy ``ciphers`` directory.

#. Let's create ``setup.py`` file

   * ``setup.py`` file is an entrypoint where we specify package metadata and other requirements
   * For more information check `references`_ and setuptools_ documentation.

#. Open ``setup.py`` in your favorite editor and write following code:

   * Adjust valuies of ``EMAIL`` and ``AUTHOR`` to your name and email.

   .. code-block:: python

      from setuptools import setup, find_packages
      import os

      NAME = "ciphers"
      DESCRIPTION = "Example package providing ciphers."
      URL = ""
      EMAIL = "1oglop1@gmail.com"
      AUTHOR = "Jan Gazda"
      REQUIRES_PYTHON = ">=3.6.0"
      VERSION = "0.1.0"

      # What packages are required for this module to be executed?
      REQUIRED = [
          # 'requests', 'maya', 'records',
      ]

      # The rest you shouldn't have to touch too much :)
      # ------------------------------------------------
      # Except, perhaps the License and Trove Classifiers!
      # If you do change the License, remember to change the Trove Classifier for that!

      here = os.path.abspath(os.path.dirname(__file__))

      # Import the README and use it as the long-description.
      # Note: this will only work if 'README.rst' is present in your MANIFEST.in file!
      with open(os.path.join(here, "README.rst"), encoding="utf-8") as f:
          long_description = "\n" + f.read()

      setup(
          name=NAME,
          version=VERSION,
          description=DESCRIPTION,
          long_description=LONG_DESCRIPTION,
          author=AUTHOR,
          author_email=EMAIL,
          python_requires=REQUIRES_PYTHON,
          url=URL,
          packages=find_packages( exclude=("tests",)),
          # entry_points={
          #     'console_scripts': [
          #         # 'mycli=mymodule:cli',
          #     ],
          # },
          install_requires=REQUIRED,
          include_package_data=True,
          license='MIT',
          classifiers=[
              # Trove classifiers
              # Full list: https://pypi.python.org/pypi?%3Aaction=list_classifiers
              "License :: OSI Approved :: MIT License",
              "Programming Language :: Python",
              "Programming Language :: Python :: 3",
              "Programming Language :: Python :: 3.6",
              "Programming Language :: Python :: Implementation :: CPython",
              "Programming Language :: Python :: Implementation :: PyPy",
          ],
      )

#. Create another file ``README.RST`` and open it in your favorite editor.

   * ``README.rst`` - All projects should contain a readme file that covers the goal of the project.
   * Feel free to use my example:

   .. code-block:: rst

      ===============
      Ciphers package
      ===============


      This is an awesome package providing various ciphers.

#. Save the file ``README.rst``
#. Create another file ``MANIFEST.in``

   * ``MANIFEST.in`` - needed when you need to package additional files that are not automatically included in a source distribution.

   * type following into the file and save it.

   .. code-block:: text

    include README.rst

We have just made necessary preparations to create installable package. The structure of the project should look like this:

.. code-block:: text

 ciphers_project
 ├── MANIFEST.in
 ├── README.rst
 ├── ciphers
 │   ├── __init__.py
 │   ├── __version__.py
 │   └── caesar.py
 └── setup.py

We are going to do two things:

* install our package into separate virtual environment.
* Build portable installer ``wheel``

Installing the package in virtual environment.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Go to the task directory ``level_3``

   * if you have followed all steps you should be able to use ``cd ..``

#. Create new directory ``mkdir app_1``
#. Go to the directory ``cd app_1``
#. Install our package using pipenv: ``pipenv install ../ciphers_projectpip``
#. Verify package was correctly installed: ``pipenv graph``

   .. code-block:: text

    ciphers==0.1.0

Let's use the package we have just installed.

#. Create new file ``app_1.py`` and open it in your favorite text editor.
#. Insert following code:

   .. code-block:: python

      import ciphers
      from ciphers import caesar

      if __name__ == "__main__":

          print("We are using package ciphers loaded from", ciphers)

          message = "Hello World!"

          encoded = caesar.encode(4, message)

          # use encoded message as input
          decoded = caesar.decode(4, encoded)

          print(f"Oridignal message: {message}")
          print(f"Encoded message: {encoded}")
          print(f"Decoded message: {decoded}")

#. Run the code: ``pipenv run python app_1.py``

   * Desired output:

   .. code-block:: text

      We are using package ciphers located at: <module 'ciphers' from '/Users/user/.virtualenvs/app_1-2aSkwHkG/lib/python3.6/site-packages/ciphers/__init__.py'>
      Oridignal message: Hello World!
      Encoded message: Lipps$[svph%
      Decoded message: Hello World!


Okay we have learned that we can install package from it's directory.
But we can also build an installer and share it with your friends.

Building wheel
^^^^^^^^^^^^^^

`Wheel <wheels_>`_ A wheel is a ZIP-format archive with a specially formatted file name and the .whl extension.
You can then distribute this archive and share your python packages.
`PEP 427 -- The Wheel Binary Package Format 1.0 <https://www.python.org/dev/peps/pep-0427/>`_

We are going to use ``setup.py`` to build the wheel.

#. Go to the project folder ``cd ciphers_project``
#. And type: ``python setup.py bdist_wheel``

   * If everything went well, command created new folders in our project

   .. code-block:: text

      ciphers_project
      ├── build
      │   ├── bdist.macosx-10.6-intel
      │   └── lib
      │       └── ciphers
      │           ├── __init__.py
      │           └── caesar.py
      ├── ciphers.egg-info
      │   ├── PKG-INFO
      │   ├── SOURCES.txt
      │   ├── dependency_links.txt
      │   └── top_level.txt
      ├── dist
      │   └── ciphers-0.1.0-py3-none-any.whl
      └── setup.py


   * ``build`` - This is were our package is being build
   * ``ciphers.egg-info`` - ``egg-info`` directory contains Python egg metadata, regenerated from source files by setuptools.
   * ``dist`` - Setuptools distribution folder. Is the directory where we can find our wheel.
   * All data from directories above were automatically generated and you can safely remove and exclude them from VCS.
   * For more info about building also check: https://docs.python.org/3.6/install/#how-building-works

You can now distribute this wheel to your friends, customer or publish it to PyPI.


.. _references:

References
----------

* `Caesar cipher wiki <Caesar Cipher_>`_

* `Import documentation <import_>`_

* PYTHONPATH_ and `Sys path <sys_path_>`_

* `Package distribution <package_distribution_>`_

* `Packaging guide <packaging_guide_>`_

* `Setuptools <setuptools_>`_

* `Python wheels <wheels_>`_

.. _Caesar Cipher: https://en.wikipedia.org/wiki/Caesar_cipher
.. _UTF-8: https://en.wikipedia.org/wiki/UTF-8
.. _\__main__: https://docs.python.org/3/library/__main__.html
.. _import: https://docs.python.org/3/reference/import.html
.. _sys_path: https://docs.python.org/3/library/sys.html#sys.path
.. _PYTHONPATH: https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH
.. _package_distribution: https://packaging.python.org/tutorials/distributing-packages/#requirements-for-packaging-and-distributing
.. _packaging_guide: http://python-packaging.readthedocs.io/en/latest/index.html
.. _setuptools: http://setuptools.readthedocs.io/en/latest/setuptools.html
.. _wheels: https://pythonwheels.com