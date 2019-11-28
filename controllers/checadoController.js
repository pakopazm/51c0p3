function setChecado() {
    var nip = $('#nip').val();
    var url = "http://cpff.haciendachiapas.gob.mx/Formato/api/checado";
    if (nip != "") {
      $.ajax({
        type: 'POST',
        url: url,
        headers: { 'Access-Control-Allow-Origin': '*' },
        dataType: "json",
        data: { "NIP": nip, "Mes": 0, "Anio": 0 },
        success: function (data) {
          if (data) {
            alert('Checado Correcto')
          }
          else {
            alert('Fallo Checado');
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert(textStatus);
        }
      });
    }
    else {
      alert("Agregar NIP");
    }
  }