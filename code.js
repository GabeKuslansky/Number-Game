$(window).ready(function (index) {
    var min = 1;
    var max = 100;
    var guess;
    var textbox = $('#guess');
    $(textbox).attr('placeholder', min + ' - ' + max);
    var again = $('#again');
    var randomNumber = Math.round(Math.random() * 100);
    $('#output').hide();
    $('#guess').hide();
    $('.lives').hide();
    $('#guessbutton').hide();
    $('#again').hide();
    var guesses = 7;
    document.getElementById('lives').innerHTML = guesses;
    $(document).ready(function (event) {
        $(textbox).focus();

        function update() {
            $(textbox).attr('placeholder', min + ' - ' + max);
        }

        function disable() {
            document.getElementById('guess').disabled = true;
            document.getElementById('guessbutton').disabled = true;
        }

        function enable() {
            document.getElementById('guess').disabled = false;
            document.getElementById('guessbutton').disabled = false;
        }
        jQuery('#1').on('click', function () {

            document.getElementById('display-text').innerHTML = "I've thought of a number between 1 and 100. Guess it below";

            $('#guess').show();
            $('.lives').show();
            $('#guessbutton').show();
            $('#output').show();
            $(this).hide();
            enable();
            $(textbox).focus();
        });


        function start() {

            if (guesses > 0) {

                if (textbox.val().length == 0 || textbox.val() == ' ' || textbox.val() == '  ' || textbox.val() == '   ') {
                    alert('Enter a value!');
                } else {

                    if (isNaN(textbox.val())) {
                        alert('Enter a number!');
                    } else {



                        guess = document.getElementById('guess').value;
                        if (guess > 100) {
                            alert("It can't be higher than 100!");
                            $(textbox).val('');
                        } else {

                            if (guess > randomNumber) {
                                print('My number is lower than ' + guess);
                                if (guess < max) {
                                    max = parseFloat(guess) - 1;
                                }
                                update();
                                guesses--;
                                $('.lives-info').slideToggle('fast');
                                document.getElementById('lives').innerHTML = guesses;
                                $('.lives-info').slideToggle('fast');
                            } else {
                                if (guess < randomNumber) {
                                    print('My number is higher than ' + guess);
                                    guesses--;
                                    if (guess > min) {
                                        min = parseFloat(guess) + 1;
                                    }
                                    update();
                                    $('.lives-info').slideToggle('fast');
                                    document.getElementById('lives').innerHTML = guesses;
                                    $('.lives-info').slideToggle('fast');
                                } else {
                                    if (guess == randomNumber) {

                                        print('You guessed it! My Number was ' + guess);
                                        disable();
                                        $(again).show();

                                    }
                                }
                            }
                            $('#guess').val("");
                        }
                    }
                }
            } else {
                print('You lost! The number was ' + randomNumber);
                $(again).show();
                disable();
            }
            $(textbox).focus();
            if (guesses == 0) {
                print('You lost! The number was ' + randomNumber);
                $(again).show();
                disable();
            }
        }



        function print(string) {
            document.getElementById('output').innerHTML = string;
        }

        $('#guessbutton').click(function () {

            start();

        });

        $(again).click(function () {
            guesses = 7;
            document.getElementById('lives').innerHTML = guesses;
            enable();
            print('');
            $(this).hide();
            $(textbox).focus();
            update();
        });
        $(textbox).keypress(function (e) {
            if (e.which == 13) {
                start();
            }
        });
    });
});
