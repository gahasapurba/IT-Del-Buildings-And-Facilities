// Parallax Effect

$(window).on('load', function () {
	$('.login').addClass('muncul');
});

// Validasi Login

bootstrapValidate(
	'#usernamemasuk',
	'required:Username Harus Diisi !'
);

bootstrapValidate(
	'#usernamemasuk',
	'min:10:Username Minimal 10 Karakter !'
);

bootstrapValidate(
	'#passwordmasuk',
	'required:Password Harus Diisi !'
);

bootstrapValidate(
	'#passwordmasuk',
	'min:5:Password Minimal 5 Karakter !'
);

// Tekan Tombol

function gahasa() {
	var returnValue = true;
	var usernamemasuk = document.getElementById("usernamemasuk").value;
	var passwordmasuk = document.getElementById("passwordmasuk").value;

	if (usernamemasuk == "" && passwordmasuk == "") {
		returnValue = false;
        alert("Data Tidak Boleh Kosong");
        window.location.href = "formlogin.html";
    } else if (usernamemasuk == "") {
		returnValue = false;
		alert("Masukkan Username !");
		window.location.href = "formlogin.html";
		document.getElementById("usernamemasuk").focus();
	} else if (passwordmasuk == "") {
		returnValue = false;
		alert("Masukkan Password !");
		window.location.href = "formlogin.html";
		document.getElementById("passwordmasuk").focus();
	} else if (usernamemasuk == "adminganteng" && passwordmasuk == "adminganteng234" ) {
		alert("Pengisian Data Success");
        window.location.href = "../../Page/Page Admin/Page 1/page1.html";
    } else if (usernamemasuk == "karyawancantik" && passwordmasuk == "karyawancantik234" ) {
    	alert("Pengisian Data Success");
        window.location.href = "../../Page/Page Karyawan/Page 1/page1.html";
	} else {
		alert("Anda Salah Memasukkan Data");
		window.location.href = "formlogin.html";
	}

	return returnValue;
}