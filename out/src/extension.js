'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const vscode_languageclient_1 = require("vscode-languageclient");
function startLanguageServer(command) {
    let serverOptions = {
        command: command,
    };
    let clientOptions = {
        // Register the server for plank files
        documentSelector: [{ scheme: 'file', language: 'plank' }],
    };
    // Create the language client and start the client.
    let disposable = new vscode_languageclient_1.LanguageClient('plank-server', 'Plank Language Server', serverOptions, clientOptions).start();
    return disposable;
}
function activate(context) {
    let server = vscode_1.workspace.getConfiguration().get('plank.languageServerPath', 'plank-server');
    let serverDisposable = null;
    if (server !== null) {
        serverDisposable = startLanguageServer(server);
        context.subscriptions.push(serverDisposable);
    }
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map