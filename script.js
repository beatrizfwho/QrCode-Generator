function GerarQrCode() {
    var inputUsuario = document.querySelector('input').value
    console.log(inputUsuario)
    var googleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl='
    var conteudoQrCode = googleChartAPI + encodeURIComponent(inputUsuario)
    document.querySelector('#QrCodeImg').src = conteudoQrCode
}