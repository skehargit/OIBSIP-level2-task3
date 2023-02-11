var ulList = document.querySelector('ul');
        ulList.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
                document.getElementById("change_text").innerHTML = "Task completed";
            }
        }, false);
        function addList() {
            var li = document.createElement("li");
            var inputValue = document.getElementById("listInput").value;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            if (inputValue === '') {
                document.getElementById("change_text").innerHTML = "Enter Somthing to add";
                document.getElementById("change_text").style.color = "red";
            } else {
                document.getElementById("UL").appendChild(li);
                document.getElementById("change_text").style.color = "white";
                document.getElementById("change_text").innerHTML = "Task added";
                
            }

            document.getElementById("listInput").value = "";

            var span = document.createElement("SPAN");
            var txt = document.createTextNode("X");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }
        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }