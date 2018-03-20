var speech = SpeechToText;
    var activeSTT;

    function listen() {
        activeSTT = speech.listen({
            onStart: function() {
                console.log('onStart Speech event');
            },
            onResult: function(e) {
                console.log('onResult Speech event', e.text);
                document.getElementById("recognizedText").innerHTML = e.text;
                if (e.isFinal) {
                    stopListening();
                }
            },
            onError: function(e) {
                console.log('onError Speech event', e);
            },
            onEnd: function(e) {
                console.log('onEnd Speech event', e);
                stopListening();
            }
        });
    }

    function startListening() {
        if (activeSTT) {
            // do nothing, speech is active
        } else if (speech.isSupported) {
            listen();
        } else {
            alert('speech not supported by this browser');
        }
    }

    function stopListening() {
        if (activeSTT) {
            activeSTT.stop();
            activeSTT = null;
        }
    }

    document.querySelector('#btn').onclick = startListening;
