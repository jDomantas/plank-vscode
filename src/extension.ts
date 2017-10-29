'use strict';

import { workspace, window, ExtensionContext, Disposable } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient';

function startLanguageServer(command: string): Disposable {
    let serverOptions: ServerOptions = {
        command: command,
    };
    
    let clientOptions: LanguageClientOptions = {
        // Register the server for plank files
        documentSelector: [ { scheme: 'file', language: 'plank' } ],
    };

    // Create the language client and start the client.
    let disposable = new LanguageClient(
        'plank-server',
        'Plank Language Server',
        serverOptions,
        clientOptions
    ).start();

    return disposable;
}

export function activate(context: ExtensionContext) {
    let server = workspace.getConfiguration().get('plank.languageServerPath', 'plank-server');
    let serverDisposable: Disposable = null;
    if (server !== null) {
        serverDisposable = startLanguageServer(server);
        context.subscriptions.push(serverDisposable);
    }
}