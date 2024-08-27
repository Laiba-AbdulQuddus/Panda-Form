
        let usernameRef = document.getElementById("username");
        let passwordRef = document.getElementById("password");
        let eyeL = document.querySelector(".eyeball-l");
        let eyeR = document.querySelector(".eyeball-r");
        let handL = document.querySelector(".hand-l");
        let handR = document.querySelector(".hand-r");
        let eye = document.querySelector(".eyeimg");
        
        let normalEyeStyle = () => {
            eyeL.style.cssText = `
                top: 10px;
                left: 10px;
            `;
            eyeR.style.cssText = `
                top: 10px;
                left: 10px;
            `;
        };
        
        let normalHandStyle = () => {
            handL.style.cssText = `
                height: 38px;
                top: 100px;
                left: 87px;
                transform: rotate(0deg);
            `;
            handR.style.cssText = `
                height: 38px;
                top: 100px;
                right: 87px;
                transform: rotate(0deg);
            `;
        };
        
        usernameRef.addEventListener("focus", () => {
            eyeL.style.cssText = `
                top: 15px;
                left: 10px;
            `;
            eyeR.style.cssText = `
                top: 15px;
                left: 10px;
            `;
            normalHandStyle();
        });
        
        passwordRef.addEventListener("focus", () => {
            handL.style.cssText = `
                height: 95px;
                top: 33px;
                left: 150px;
                transform: rotate(-155deg);
            `;
            handR.style.cssText = `
                height: 95px;
                top: 33px;
                right: 150px;
                transform: rotate(155deg);
            `;
            normalEyeStyle();
        });
        document.addEventListener("click", (e) => {
            let clickedElem = e.target;
            if(clickedElem != usernameRef && clickedElem != passwordRef){
                normalEyeStyle();
                normalHandStyle();
            }
        })
        document.addEventListener("click")