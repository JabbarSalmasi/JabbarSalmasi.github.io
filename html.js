$('document').ready(function(){//Функция испонится лишь тогда, когда вся страница будет готова
	$('#log').on('change',function(){//При изменении данных в поле Логина
		let log=$('#log').val();
		alert('Hello '+log+'!');
	})
	$('#b1').on('click',function(){//При нажатие на кнопку с id=b1
		let email=$('#email').val();
		prompt('\nWe\'ve sent a message with code to '+email+'\nEnter the code:');//Подсказка с возможностью заполнения поля
	})
	$('#log,#pass,#email').on('focus',function(){//При фокусе на одно поле из 3-х(Логина,Пароля или Почты) они будут подсвечиваться
		document.getElementById("pass").style.borderColor="red";
		document.getElementById("log").style.borderColor="red";
		document.getElementById("email").style.borderColor="red";
		
	})
	$('input').on('blur',function(){//При выхода из фокуса вернуть стандартный цвет
		pass=document.getElementById("pass").style.borderColor="";
		pass=document.getElementById("log").style.borderColor="";
		pass=document.getElementById("email").style.borderColor="";
	})
	$('textarea').on('select',function(){//При выделении текста
		alert('You\'ve selected the text');
	})
	$('#pass').on('keyup',function(){//Одновременное выведение текста в зависымости от данных ввода в поле Пароль
		let up=$('#pass').val().length;//Проверка кол-ва введенных символов в поле Пароль
		let out;
		if(up>11){
			out='Perfect Password';
		}
		else if(up>7){
			out='Good Password';
		}
		else{
			out='Bad Password';
		}
		$('#result').html(out);
	})
	
	vid = document.getElementById('vid'); 
	vid.addEventListener('mouseover', function() {//Когда курсор на картинку(файл Witcher.html) - воспроизводить видео
	vid.play();
	});
	vid.addEventListener('mouseout', function() {//Если курсор не на картинке, то останавливать видео
	vid.pause();
	});
})

	