page.onAlert = page.onConfirm = page.onPrompt = function () {
    for (var i = 0; i < 1e8; i++) {
    }
    return "a";
};