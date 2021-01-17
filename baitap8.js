function getEle(ele) {
  return document.getElementById(ele);
}

var listNumbers = [];

getEle("btnThemSo").addEventListener("click", themSo);

function themSo() {
  var number = parseInt(getEle("txtNumber").value);
  listNumbers.push(number);
  getEle("txtNumber").value = "";
  getEle("txtThongBao").innerHTML = "";
  getEle("ketQua").innerHTML = "";
}

/**
 * Kiem tra nhap
 */

function kiemTraNhap() {
  var kQ = true;
  if (listNumbers.length <= 0) {
    getEle("txtThongBao").innerHTML = "Vui lòng thêm số.";
    kQ = false;
  }
  return kQ;
}

// Tong so duong
getEle("btnTongSoDuong").addEventListener("click", function () {
  if (!kiemTraNhap()) {
    return;
  }
  getEle("txtThongBao").innerHTML = "";
  var tong = 0;
  for (var i = 0; i < listNumbers.length; i++) {
    if (listNumbers[i] > 0) {
      tong += listNumbers[i];
    }
  }
  getEle("ketQua").innerHTML = "Tổng các số dương: " + tong;
});

// Dem so duong
getEle("btnDemSoDuong").addEventListener("click", function () {
  if (!kiemTraNhap()) {
    return;
  }

  var soSoDuong = 0;
  for (var i = 0; i < listNumbers.length; i++) {
    if (listNumbers[i] > 0) {
      soSoDuong++;
    }
  }
  getEle("ketQua").innerHTML = "Có " + soSoDuong + " số dương.";
});

// Tim so nho nhat
getEle("btnMin").addEventListener("click", function () {
  if (!kiemTraNhap()) {
    return;
  }
  var min = listNumbers[0];
  for (var i = 1; i < listNumbers.length; i++) {
    if (min > listNumbers[i]) {
      min = listNumbers[i];
    }
  }
  getEle("ketQua").innerHTML = "Số nhỏ nhất: " + min;
});

//Tim so duong nho nhat
getEle("btnMinDuong").addEventListener("click", function () {
  if (!kiemTraNhap()) {
    return;
  }
  var mangSoDuong = [];
  for (var i = 0; i < listNumbers.length; i++) {
    if (listNumbers[i] > 0) {
      mangSoDuong.push(listNumbers[i]);
    }
  }
  var minDuong = mangSoDuong[0];
  for (var i = 1; i < mangSoDuong.length; i++) {
    if (minDuong > listNumbers[i]) {
      minDuong = listNumbers[i];
    }
  }
  getEle("ketQua").innerHTML = "Số dương nhỏ nhất là: " + minDuong;
});

//So chan cuoi cung
getEle("btnSoChan").addEventListener("click", function () {
  if (!kiemTraNhap()) {
    return;
  }
  var soChanCuoi = -1;
  for (var i = 0; i < listNumbers.length; i++) {
    if (listNumbers[i] % 2 == 0) {
      soChanCuoi = listNumbers[i];
    }
  }
  if (soChanCuoi === -1) {
    getEle("ketQua").innerHTML = "Chuỗi không có số chẵn: " + soChanCuoi;
    return;
  }
  getEle("ketQua").innerHTML = "Số chẵn cuối là: " + soChanCuoi;
});

//Doi vi tri
getEle("btnDoiCho").addEventListener("click", function () {
  var choBanDau = parseInt(getEle("txtViTri1").value);
  var choDoi = parseInt(getEle("txtViTri2").value);
  if (
    choBanDau < 1 ||
    choBanDau > listNumbers.length ||
    choDoi < 1 ||
    choDoi > listNumbers.length
  ) {
    getEle("thongBao").innerHTML =
      "Vị trí nhập không khớp với vị trí đang có trong chuỗi";
    return;
  }
  var giaTriDau = listNumbers[choBanDau - 1];
  listNumbers[choBanDau - 1] = listNumbers[choDoi - 1];
  listNumbers[choDoi - 1] = giaTriDau;
  getEle("chuoiMoi").innerHTML = "Chuỗi mới: " + listNumbers;
});

//Sap xep
getEle("btnSapXep").addEventListener("click", function () {
  listNumbers.sort(function (a, b) {
    return a - b;
  });
  getEle("chuoiMoi2").innerHTML = "Chuỗi đã sắp xếp: " + listNumbers;
});
