// Parallax Effect

$(window).on('load', function () {
	$('.pesan').addClass('muncul');
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

bootstrapValidate(
	'#deskripsibarang',
	'required:Masukkan Alamat !'
);

bootstrapValidate(
	'#deskripsibarang',
	'max:100:Alamat Maksimal 100 Karakter !'
);

// Tekan Tombol

function gahasa() {
	var returnValue = true;
	var nama = document.getElementById("nama").value;
	var email = document.getElementById("email").value;
	var telepon = document.getElementById("telepon").value;
	var deskripsibarang = document.getElementById("deskripsibarang").value;

	if (nama == "" && email == "" && telepon == "" && deskripsibarang == "") {
		returnValue = false;
        alert("Data Tidak Boleh Kosong");
        window.location.href = "pesanbarang.html";
    } else if (nama == "") {
		returnValue = false;
		alert("Masukkan Nama !");
		window.location.href = "pesanbarang.html";
		document.getElementById("nama").focus();
	} else if (email == "") {
		returnValue = false;
		alert("Masukkan Email !");
		window.location.href = "pesanbarang.html";
		document.getElementById("email").focus();
	} else if (telepon == "") {
		returnValue = false;
		alert("Masukkan No.Telepon !");
		window.location.href = "pesanbarang.html";
		document.getElementById("telepon").focus();
	} else if (deskripsibarang == "") {
		returnValue = false;
		alert("Masukkan Deskripsi Barang !");
		window.location.href = "pesanbarang.html";
		document.getElementById("deskripsibarang").focus();
	} else {
		alert("Pengisian Data Success");
		window.location.href = "../../Page/Page Karyawan/Page 1/page1.html";
	}

	return returnValue;
}