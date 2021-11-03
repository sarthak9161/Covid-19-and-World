// Code for vaccine slots checking 
let centers=[]
const cards=document.querySelector(".cards")
const searchbtn=document.querySelector(".searchbox").querySelector("button")
let today,dd,mm,yy
today=new Date;
dd=today.getDate();
mm=today.getMonth()+1;
yy=today.getFullYear();

today=`${dd}-${mm}-${yy}`;





function cowinData(pincode){
    let cowinUrl=`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${today}`
    const xhr=new XMLHttpRequest()
    xhr.open("GET",cowinUrl,true)
    xhr.onload=function(){
        if(this.status==200){
            let data=JSON.parse(this.responseText);
            //console.log(data);


            if(data.sessions!=[]){
              

                data.sessions.map((e,i)=>{

                    let centerInfo=[
                        e.name,
                        e.adress,
                        e.vaccine,
                        e.date,
                        e.min_age_limit,
                        e.available_capacity,
                        e.block_name,
                        e.district_name,
                        e.slots
                    ]
                    // console.log(centerInfo);
                    centers.push(centerInfo);
                    let code = `
                    <div class="card">
                    <h1>
                    <span class="category">Center Name - </span>
                    ${centers[i][0]}
                  </h1>
                  <div class="innerCard">
                  <h3>
                  <span class="category">Center Address - </span>
                  ${centers[i][1]}
                </h3>
                <h3>
                  <span class="category">Vaccine Name - </span>
                  ${centers[i][2]}
                </h3>
                <h3>
                  <span class="category">Date Of Vaccination - </span>
                  ${centers[i][3]}
                </h3>
                <h3>
                  <span class="category">Minimum Age Limit - </span>
                  ${centers[i][4]}
                </h3>
                <h3>
                  <span class="category">Available Capacity - </span>
                  ${centers[i][5]}
                </h3>
                <h3>
                  <span class="category">Block Name - </span>
                  ${centers[i][6]}
                </h3>
                <h3>
                  <span class="category">District Name - </span>
                  ${centers[i][7]}
                </h3>
                <h3>
                  <span class="category">Available Slots - </span>
                   ${centers[i][8].join(" | ")}
                </h3>
                  </div>
                  </div>`;

                  cards.innerHTML+=code;
               
                
                });

            }
          
            if(data.sessions.length==0){
                alert("Data not found")
            }
        }else{
            alert("Opps ! Some error occured")
        }
    };
    xhr.send()
}

const input=document.querySelector("#input")

input.addEventListener("keypress",(e)=>{
    if(e.which==13){
        let pincode=input.value;

if(pincode==""){
    alert("Please enter pincode")
}else if(pincode!=""){
    cowinData(pincode);
}
    }
})
searchbtn.addEventListener("click",()=>{
let pincode=input.value;

if(pincode==""){
    alert("Please enter pincode")
}else if(pincode!=""){
    cowinData(pincode);
}
})
// cowinData()