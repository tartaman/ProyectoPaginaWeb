$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  var terms = document.getElementById("terms")
  terms.addEventListener('click', function (e) {
      e.preventDefault()
  })