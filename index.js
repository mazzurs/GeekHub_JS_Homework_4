$(function () {
    $('input[name="task4"]').on('keyup', function () {
        if (($(this).val()).match(/^JavaScript$/)) {
            $('input[name="task4"]').prop('checked', true);
        } else {
            $('input[name="task4"]').prop('checked', false);
        }
    });
});

$(function () {                             // Задание 5
    $('form').on('submit', function (e) {
        e.preventDefault();

        var numbers = $(this).find('input[name="numbers"]'),
            letters = $(this).find('input[name="letters"]'),
            agreement = $(this).find('input[name="agreement"]'),
            type = $(this).find('input[name="type"]');

        if(!(numbers.val()).match(/^\d+$/) && !''){
            alert('В первом поле должно быть число');
        }
        if(!(letters.val()).match(/\w+/) && !''){
            alert('Во втором поле должна быть строка');
        }
        if(!agreement.is(':checked')){
            alert('Чекбокс не отмечен');
        }
        if(!type.is(':checked')){
            alert('Радио не выбрано');
        }
        else{
            $(this).unbind('submit').submit();
        }

    });
});




$(function () {
    $('#field').on('keyup', function () {
        function escapeRegExp(text) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        }

        var reg = escapeRegExp($('#field').val());
        var regExp = new RegExp(reg, 'gim');
        var regExp2 = new RegExp(reg, 'i');


        $('ul li').each(function(i,elem) {




            if($(this).text().match(regExp)){


                $(this).show(100);
                this.innerHTML = this.textContent.replace(regExp, '<span class="highlight">'+$(this).text().match(regExp2)+'</span>');
            }
            else
            {
                $(this).hide(100);
                this.innerHTML = this.textContent;
            }
        });
    });
});