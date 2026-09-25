# ROVECO – Controllo mittente

Versione 1.1.0.0. Componente aggiuntivo Outlook OnMessageSend, ospitato su GitHub Pages.

## Comportamento

- Mittente uguale alla casella dell’utente: promemoria con possibilità di annullare o confermare l’invio.
- Customer Service e altre caselle delegate: invio consentito.
- Lettura del mittente fallita o oltre 3 secondi: richiesta di verifica manuale.

## Distribuzione

[Pagina di installazione](https://andreagx.github.io/outlook-addin-test-ms/)

[Manifest](https://andreagx.github.io/outlook-addin-test-ms/manifest-test-ms.xml)

Aggiornare l’app esistente nelle App integrate di Microsoft 365 con il manifest. Identificativo invariato: `9f6d3f4e-1d41-4f6b-b4b2-7a7b3d47e2c1`. Gli URL e il nome tecnico del file sono conservati per compatibilità.

Per l’uso definitivo mantenere la distribuzione centralizzata; rimuovere la copia manuale di prova solo dopo aver verificato il funzionamento di quella centralizzata. Non creare un nuovo identificativo o ampliare gli utenti assegnati durante l’aggiornamento.

## Verifica

Controllare che Outlook carichi commands.html da andreagx.github.io. Provare il mittente personale e Customer Service. Il titolo standard del dialogo è gestito da Outlook.

Il runtime HTML inizializza Office con Office.onReady(); l’associazione dell’handler resta fuori dal callback, anche per il runtime JavaScript.
