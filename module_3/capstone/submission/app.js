$("#alert-success").hide();
$("#alert-fail").hide();

fetch("https://www.colr.org/json/schemes/random/30?scheme_size_limit=%3E4")
 .then((res) => res.json())
 .then((data) => {
    const mainLayout = $("#main-layout");
    if(data.success) {
        data.schemes.map((obj) => {
            mainLayout.append(generateCard(obj.colors));
            console.log(obj.colors);
        });
        $("#alert-success").show()
        setTimeout(function () {
            $("#alert-success").fadeOut();
        }, 1500);
    }
 })
  .catch((err) => {
    $("#alert-fail").show()
    setTimeout(function () {
        $("#alert-fail").fadeOut();
    }, 1500);
  })
    
 function generateCard(colorArr) {
    return `
        <div class="card-container">
            <div class="color-1" style="background: #${colorArr[0]}">
                <p class="hex">#${colorArr[0]}</p>
            </div>
            <div class="color-2" style="background: #${colorArr[1]}">
                <p class="hex">#${colorArr[1]}</p>
            </div>
            <div class="color-3" style="background: #${colorArr[2]}">
                <p class="hex">#${colorArr[2]}</p>
            </div>
            <div class="color-4" style="background: #${colorArr[3]}">
                <p class="hex">#${colorArr[3]}</p>
            </div>
        </div>
    `
 }