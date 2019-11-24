window.onload = function () {
    
    originalImageWidth = 0;
    originalImageHeight = 0;
    if (!checkBrowser()) {
        alert("请更换浏览器进行头像上传");
        window.opener = null;
        window.open('', '_self');
        window.close();
        return ;
    }
    document.getElementById("files").addEventListener("change", function (e) {
        console.log(e.target.files[0]);
        if ($("#editPart").hasClass("hide")) {
            $("#editPart").removeClass("hide");
        }
        var isQualified = checkType(e.target.files[0]);
        if (!isQualified) {
            return false;
        }else {
            document.getElementById("remind").innerHTML = "可在下面对图像进行剪切编辑";
            readFile(e.target.files[0]);
        }
    });
    document.getElementById("edit").addEventListener("drag", function (e) {edit(e)});
    document.getElementById("edit").addEventListener("dragend", function (e) {setTimeout(show, 500)});
    document.getElementById("confirm").addEventListener("click", function (e) {
        if (document.getElementById("originalImage").src == "") {
            alert("请选择头像");
            return false;
        }
        if (!$("#editPart").hasClass("hide")) {
            $("#editPart").addClass("hide");
        }
        document.getElementById("remind").innerHTML = "";
    });
    document.getElementById("store").addEventListener("click", submit)
}

function checkBrowser() {

    if (!FileReader) {
        return false;
    }else{
        return true;
    }
}

function checkType(file) {

    var pattern = /(\.jpg$)|(\.png$)|(\.jpeg$)|(\.bmp$)/;

    if (!(pattern.test(file.name))) {
        alert("请选择jpg、jpeg、png、bmp格式的图片");
        return false;
    }else{
        return true;
    }
}

function readFile(file) {
    
    var reader = new FileReader();

    reader.onabort = function () {
        console.log("数据读取中断。");
        return false;
    };
    reader.onerror = function () {
        console.log("数据读取出错。");
        return false;
    };
    reader.onloadstart = function (e) {
        console.log(e);
        console.log("数据读取开始。");
        return true;
    };
    reader.onprogress = function (e) {
        console.log(e);
        console.log("数据读取中。");
        return true;
    };
    reader.onload = function (e) {
        console.log(e);
        console.log("数据读取完成。");
        display(e.target.result);
        return true;
    };
    reader.onloadend = function (e) {
        console.log(e);
        console.log("数据读取结束。");
        return true;
    };
    
    reader.readAsDataURL(file);
}

function display(data) {
    
    var originalImage = document.getElementById("originalImage");
    originalImage.src = data;

    setTimeout(function name(params) {

        originalImageWidth = $("#originalImage").width();
        originalImageHeight = $("#originalImage").height();

        originalImage.style.width = "500px";
        $("#edit").css("left", "0px");
        $("#edit").css("top", "0px");
    }, 50);

    setTimeout(function () {

        var myCanvas = document.getElementById("myCanvas");
        var ctx = myCanvas.getContext("2d");
        myCanvas.width = $("#originalImage").width();
        myCanvas.height = $("#originalImage").height();
        ctx.drawImage(originalImage, 0, 0, $("#originalImage").width(), $("#originalImage").height());

        var editFrame = document.getElementById("edit");
        editFrame.style.height = $("#originalImage").height() + "px";
        editFrame.style.width = $("#originalImage").width() + "px";
    }, 400);
}

function edit(event) {

    var index;
    if (Math.abs(event.layerX) < 40 && Math.abs(event.layerY) < 40) {
        index = 1;
        if ($("#edit").outerWidth - event.layerX < 120 || $("#edit").outerHeight - event.layerY < 120 || $("#edit").position().left + event.layerX < 0 || $("#edit").position().top + event.layerY < 0) {
            index = 0;
            return false;
        }
    }
    if (Math.abs($("#edit").outerWidth() - event.layerX) < 40 && Math.abs(event.layerY) < 40) {
        index = 2;
        if (event.layerX < 120 || $("#edit").outerHeight - event.layerY < 120 || $("#edit").position().top + event.layerY < 0 || $("#edit").position().left + event.layerX > $("#originalImage").width()) {
            index = 0;
            return false;
        }
    }
    if (Math.abs(event.layerX) < 40 && Math.abs($("#edit").outerHeight() - event.layerY) < 40) {
        index = 3;
        if ($("#edit").outerWidth - event.layerX < 120 || event.layerY < 120 || $("#edit").position().left + event.layerX < 0 || $("#edit").position().top + event.layerY > $("#originalImage").height()) {
            index = 0;
            return false;
        }
    }
    if (Math.abs($("#edit").outerWidth() - event.layerX) < 40 && Math.abs($("#edit").outerHeight() - event.layerY) < 40) {
        index = 4;
        if (event.layerX < 120 || event.layerY < 120 || $("#edit").position().top + event.layerY > $("#originalImage").height() || $("#edit").position().left + event.layerX > $("#originalImage").width()) {
            index = 0;
            return false;
        }
    }
    console.log(index);
    if (index == 1) {
        $("#edit").css("left", event.layerX + $("#edit").position().left + "px");
        $("#edit").css("top", event.layerY + $("#edit").position().top + "px");
        $("#edit").outerWidth($("#edit").outerWidth() - event.layerX + "px");
        $("#edit").outerHeight($("#edit").outerHeight() - event.layerY + "px");
    }else if (index == 2) {
        $("#edit").css("top", event.layerY + $("#edit").position().top + "px");
        $("#edit").outerWidth(event.layerX + "px");
        $("#edit").outerHeight($("#edit").outerHeight() - event.layerY + "px");
    }else if (index == 3) {
        $("#edit").css("left", event.layerX + $("#edit").position().left + "px");
        $("#edit").outerWidth($("#edit").outerWidth() - event.layerX + "px");
        $("#edit").outerHeight(event.layerY + "px");
    }else if (index == 4) {
        $("#edit").outerWidth(event.layerX + "px");
        $("#edit").outerHeight(event.layerY + "px");
    }else {
        return ;
    }
}

function show() {

    var originalImage = document.getElementById("originalImage");
    var currentImageWidth = $("#originalImage").width();
    var currentImageHeight = $("#originalImage").height();

    var editWidth = $("#edit").outerWidth();
    var editHeight = $("#edit").outerHeight();
    var editLeft = $("#edit").position().left;
    var editTop = $("#edit").position().top;

    var leftScale = editLeft / currentImageWidth;
    var topScale = editTop / currentImageHeight;
    var widthScale = editWidth / currentImageWidth;
    var heightScale = editHeight / currentImageHeight;
    var leftBlank = originalImageWidth * leftScale;
    var topBlank = originalImageHeight * topScale;
    var width = originalImageWidth * widthScale;
    var height = originalImageHeight * heightScale;

    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    myCanvas.width = editWidth;
    myCanvas.height = editHeight;
    
    ctx.drawImage(originalImage, leftBlank, topBlank, width, height, 0, 0, editWidth, editHeight);
}

function submit() {
    
}
/*
function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    // 返回一个包含PNG图片的<img>元素
    var oImgPNG = Canvas2Image.saveAsPNG(oCanvas, true);

    // 返回一个包含JPG图片的<img>元素
    var oImgJPEG = Canvas2Image.saveAsJPEG(oCanvas, true);

    // 返回一个包含BMP图片的<img>元素
    var oImgBMP = Canvas2Image.saveAsBMP(oCanvas, true); 
}
*/
