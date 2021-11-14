$(function () {
    $("#my_form").submit(function (e) {
        e.preventDefault();
        let post_url = $(this).attr("action"); // formun urlsi alınıyor
        let request_method = $(this).attr("method"); // formun metodu alınıyor
        let form_data = $(this).serialize(); // formun datası alınıyor

        $.ajax({
            // Bir web sayfasına yapılacak olan isteğin türünü belirler. GET veya POST olmak üzere iki farklı değerden birisini almalıdır.
            type: request_method,
            //  istek yapılacak sayfayı belirtmenizi sağlar.
            url: post_url,
            //  istek yapılan sayfaya herhangi bir bilgi gönderecekseniz bu bilginin ne olduğunu belirtmenizi sağlar. 
            data: form_data,
            success: function (response) {
                $("#server-results").html(response)
            }
        });
    })
})