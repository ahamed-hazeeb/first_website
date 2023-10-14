		function formvalidation() 
		{
			var fn = document.registration.fname;
			var ln = document.registration.lname;
			var uemail = document.registration.email;
			var uadult = document.registration.adult;
			var uch6 = document.registration.ch6y;
			var uch5 = document.registration.ch5y;
			var num = document.registration.phone;
			var nation = document.registration.nat;
			var u5 = document.registration.star5;
			var u4 = document.registration.star4;
			var u3 = document.registration.star3;
			var ub = document.registration.starb;
			var bb = document.registration.mpbb;
			var hb = document.registration.mphb;
			if (allLetter (fn)) 
			{
			if (allLetters (ln)) 
			{
			if (ValidateEmail(uemail))
			{
			if (allnumeric(uadult)) 
			{
			if (allnumerics(uch6)) 
			{
			if (allnumericss(uch5)) 
			{
			if(phone_valid(num))
			{
			if (allLetterss(nation))
			{
			if (acc_validation(u5,u4,u3,ub)) 
			{
			if (mp_validation(bb,hb))
			{
			}
			}
			}
			}
			}
			}
			}
			}
			}
			}
			return false;
		}
		function allLetter(fn) 
		{
			var letter =/^[A-Za-z]+$/;
			if (fn.value.match(letter)) 
			{
				return true;
			}
			else 
			{
			alert('name alphabet characters only');
			return false;
			}
		}

		function allLetters(ln) 
		{
			var letters =/^[A-Za-z]+$/;
			if (ln.value.match(letters)) 
			{
				return true;
			}
			else 
			{
			alert('Last name alphabet characters only');
			return false;
			}
		}
		function ValidateEmail(uemail)
		{
			var mail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if (uemail.value.match(mail))
			{
				return true;
			}
			else
			{
				alert("invalid email address");
				return false;
			}
		}
		function allnumeric(uadult)
		{ 
		var numbers = /^[0-9]+$/;
		if(uadult.value.match(numbers))
		{
		return true;
		}
		else
		{
		alert('enter the number');
		return false;
		}
		}
		function allnumerics(uch6)
		{ 
		var numbers = /^[0-9]+$/;
		if(uch6.value.match(numbers))
		{
		return true;
		}
		else
		{
		alert('enter the number');
		return false;
		}
		}
		function allnumericss(uch5)
		{ 
		var numbers = /^[0-9]+$/;
		if(uch5.value.match(numbers))
		{
		return true;
		}
		else
		{
		alert('enter the number');
		return false;
		}
		} 
		function phone_valid(num)
		{
	var number =/^\+?([0-9]{2})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	var phoneno = /^\d{10}$/;
	if (num.value.match(number))
		{
		return true;
		}
		else if (num.value.match(phoneno)) 
		{
			return true;
		}
		else
		{
			alert("Not valid number")
			return false;
		}
	}
	function allLetterss(nation) 
		{
			var letters =/^[A-Za-z]+$/;
			if (nation.value.match(letters)) 
			{
				return true;
			}
			else 
			{
			alert('Enter the Nationality');
			return false;
			}
		}
		
		function acc_validation(u5,u4,u3,ub)
		{
			x=0;
			if (u5.checked) 
			{
			x++;
			}
			if (u4.checked) 
			{
			x++;	
			}
			if (u3.checked)
			{
			x++;
			}
			if (ub.checked)
			{
			x++;
			}
			
			if (x==0)
			{
			alert('one');
			u5.focus();
			return false;
			}
			}
		function mp_validation(bb,hb)
		{
			x=0;
			if (bb.checked) 
			{
			x++;
			}
			if (hb.checked) 
			{
			x++;	
			}
			if (x==0)
			{
			alert('select Meal Plan');
			bb.focus();
			return false;
			}
			else{
				
alert('Form Succesfully Submitted');
window.location.reload()
return true;

			}
			}

	