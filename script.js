let images = document.querySelector(".images")
let body = document.querySelector(".body");
let firsttext= document.querySelector(".first-text")
let seconttext = document.querySelector(".second-text")

let count = 0
images.addEventListener("click" , (e)=>{

    let target = e.target.parentNode.className ; 

    if(target==="bleach box"){
   
    body.classList=""
        body.classList.add("bleach-background")
        firsttext.textContent="Bleach: Thousand-Year Blood War"
        seconttext.textContent="After a brutal surprise attack by the forces of Quincy King Yhwach,the resident Reapers of the Soul Society lick their wounds and mourn their losses. Many of the surviving Soul Reaper captains train to battle without their Bankai, the ultimate technique wielded...+ More"
        }

        

    if(target==="black-clover box"){

        body.classList=""
        body.classList.add("black-clover-background")
        firsttext.textContent="Black Clover"
        seconttext.textContent="Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the 'Wizard King'—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the...+ More"
    }
    if(target==="ruroun box"){
        body.classList=""
        body.classList.add("background")
        firsttext.textContent="Rurouni Kenshin: Meiji Kenkaku Romantan"
        seconttext.textContent="In the late 19th century, as the cruel times of the Bakumatsu period came to a close, a new Meiji era marked the age of restoration for Japan. With the war over, its infamous hero Hitokiri Battousai disappeared into thin air, leaving only his legend behin...+ More"
    }

    if(target==="dr-stone box"){

        body.classList=""
        body.classList.add("drstone-background")   
        firsttext.textContent="Dr. Stone: Stone Wars Eve of the Battle"
        seconttext.textContent="Senkuu has made it his goal to bring back two million years of human achievement and revive the entirety of those turned to statues. However, one man stands in his way: Tsukasa Shishiou, who believes that only the fittest of those petrified should be revived. As...+ More"
        }

        if(target==="demon-slayer box"){
            body.classList=""
            body.classList.add("demon-slayer-background")
            firsttext.textContent="Demon Slayer: Kimetsu no Yaiba"
            seconttext.textContent="Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decid....+ More"
        }

})