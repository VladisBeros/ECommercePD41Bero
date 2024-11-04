<html><head></head><body>(function ping() {
        var formData = new FormData();
        formData.append('click_hash', '8c35806bedd42bb58712a7bd0214a1a4');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 &amp;&amp; this.status === 200) {
                ping();
            }
        };
        xhr.open('post', 'https://umstat.com/js/ping.js', true);

        xhr.withCredentials = true;
        xhr.send(formData);
    })();












</body></html>