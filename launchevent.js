function onMessageSendHandler(event) {
    event.completed({
        allowEvent: false,
        errorMessage: "ROVECO TEST-MS OK"
    });
}

Office.actions.associate(
    "onMessageSendHandler",
    onMessageSendHandler
);
