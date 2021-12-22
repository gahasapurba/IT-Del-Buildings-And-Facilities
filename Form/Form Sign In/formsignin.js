// Parallax Effect

$(window).on('load', function () {
	$('.daftar').addClass('muncul');
});

// Validasi Sign-In

bootstrapValidate(
	'#nama',
	'required:Masukkan Nama Lengkap !'
);

bootstrapValidate(
	'#nama',
	'max:30:Nama Lengkap Maksimal 30 Karakter !'
);

bootstrapValidate(
	'#usernamedaftar',
	'required:Masukkan Username !'
);

bootstrapValidate(
	'#usernamedaftar',
	'min:10:Username Minimal 10 Karakter !'
);

bootstrapValidate(
	'#passworddaftar',
	'required:Masukkan Password !'
);

bootstrapValidate(
	'#passworddaftar',
	'min:5:Password Minimal 5 Karakter !'
);

bootstrapValidate(
	'#passworddaftar2',
	'required:Masukkan Konfirmasi Password !'
);

bootstrapValidate(
	'#passworddaftar2',
	'matches:#passworddaftar:Password Tidak Sesuai !'
);

bootstrapValidate(
	'#alamat',
	'required:Masukkan Alamat !'
);

bootstrapValidate(
	'#alamat',
	'max:100:Alamat Maksimal 100 Karakter !'
);

bootstrapValidate(
	'#email',
	'required:Email Harus Diisi !'
);

bootstrapValidate(
	'#email',
	'email:Masukkan Format Email Yang Benar !'
);

bootstrapValidate(
	'#telepon',
	'required:No.Telepon Harus Diisi !'
);

bootstrapValidate(
	'#telepon',
	'startsWith:+62:No.Telepon Harus Diawali Kode Negara +62 !'
);

bootstrapValidate(
	'#telepon',
	'numeric:No.Telepon Hanya Bisa Diisi Dengan Angka !'
);

// Tekan Tombol

function gahasa() {
	var returnValue = true;
	var nama = document.getElementById("nama").value;
	var usernamedaftar = document.getElementById("usernamedaftar").value;
	var passworddaftar = document.getElementById("passworddaftar").value;
	var passworddaftar2 = document.getElementById("passworddaftar2").value;
	var alamat = document.getElementById("alamat").value;
	var email = document.getElementById("email").value;
	var telepon = document.getElementById("telepon").value;

	if (nama == "" && usernamedaftar == "" && passworddaftar == "" && passworddaftar2 == "" && alamat == "" && email == "" && telepon == "") {
		returnValue = false;
        alert("Data Tidak Boleh Kosong");
        window.location.href = "formsignin.html";
    } else if (nama == "") {
		returnValue = false;
		alert("Masukkan Nama !");
		window.location.href = "formsignin.html";
		document.getElementById("nama").focus();
	} else if (usernamedaftar == "") {
		returnValue = false;
		alert("Masukkan Username !");
		window.location.href = "formsignin.html";
		document.getElementById("usernamedaftar").focus();
	} else if (passworddaftar == "") {
		returnValue = false;
		alert("Masukkan Password !");
		window.location.href = "formsignin.html";
		document.getElementById("passworddaftar").focus();
	} else if (passworddaftar2 == "") {
		returnValue = false;
		alert("Masukkan Konfirmasi Password !");
		window.location.href = "formsignin.html";
		document.getElementById("passworddaftar2").focus();
	} else if (alamat == "") {
		returnValue = false;
		alert("Masukkan Alamat !");
		window.location.href = "formsignin.html";
		document.getElementById("alamat").focus();
	} else if (email == "") {
		returnValue = false;
		alert("Masukkan Email !");
		window.location.href = "formsignin.html";
		document.getElementById("email").focus();
	} else if (telepon == "") {
		returnValue = false;
		alert("Masukkan No.Telepon !");
		window.location.href = "formsignin.html";
		document.getElementById("telepon").focus();
	} else {
		alert("Pengisian Data Success");
		window.location.href = "../../Page/Page Admin/Page 1/page1.html";
	}

	return returnValue;
}