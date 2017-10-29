# plank-vscode

This is a very simple extension for plank language support in Visual Studio Code. Currently provided features are syntax highligting and diagnostic reporting.

You can set path to plank language server executable in config property `"plank.languageServerPath"`. It defaults to `plank-server`, because that's how you should be able to invoke it if you install the server using cargo (using instructions in [plank repo](https://github.com/jDomantas/plank)). If you don't want to use the language server, set the property to `null`.

The extension is pretty dumb, because I have no idea what I'm doing. If you can and want to improve it, feel free to submit a pull request.
