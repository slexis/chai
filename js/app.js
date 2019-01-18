var elept = '';
var LN = navigator.language.substr(0, 2);
var atg = document.getElementsByTagName('a');

if (LN === 'vi') {
  const censp = document.querySelectorAll('.center span');
  let _vi = ['Tính khối lượng mol', 'Cân bằng phương trình', 'Chuỗi phương trình', 'Bảng tính tan', 'Bảng tuần hoàn', 'Phương trình', 'Chất hóa học', 'Cấu trúc 2d của phân tử hữu cơ', 'Cấu trúc 3d của phân tử hữu cơ', 'Dãy điện hóa kim loại', 'Đánh vần với nguyên tố'];
  for (let i = 0; i < 11; i++) {
    censp[i].innerHTML = _vi[i];
  }
  atg[0].href = 'pages/doc-vi.html';
  atg[1].href = 'pages/about-vi.html';
  atg[6].href = 'pages/periodic_table-vi.html';
}

$('#reactivity_series_btn').click(function() {
  $('#reactivity_series').slideToggle('slow')
});