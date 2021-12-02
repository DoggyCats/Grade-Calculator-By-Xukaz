// submit
document.getElementById("btn").addEventListener("button", function(e){
    //hide results
    document.getElementById("results").style.display = "none";
    
    //show loader
    document.getElementById("loading").style.display = "block";
    setTimeout(calculateResults, 1500);
    
    e.preventDefault();
});



const calculate = () => {

  
  // รับอินพุตจากผู้ใช้ไปยังตัวแปรความสูง
  let sb1 = document.querySelector("#sb1").value;
  let sb2 = document.querySelector("#sb2").value;
  let sb3 = document.querySelector("#sb3").value;
  let sb4 = document.querySelector("#sb4").value;
  let grades = "";
  
  // อินพุตเป็นสตริงจึงจำเป็นต้องพิมพ์ดีด */
  let totalgrades =
    parseFloat(sb1) +
    parseFloat(sb2) +
    parseFloat(sb3) +
    parseFloat(sb4);
  
  //การตรวจสอบเงื่อนไขการให้บริการ 
  //เกรดให้กับนักเรียนตามเปอร์เซ็นต์
  let percentage = (totalgrades / 400) * 100;
  if (percentage <= 100 && percentage >= 80) {
    grades = "A";
  } else if (percentage <= 79 && percentage >= 60) {
    grades = "B";
  } else if (percentage <= 59 && percentage >= 40) {
    grades = "C";
  } else if (percentage <= 100000000000 && percentage >= 401) {
    grades = "กวนตีนล่ะนะผมไม่ให้";
  } else {
    grades = "F";
  }
  // การตรวจสอบค่าว่างถ้าว่างกว่า
  // แสดง "กรุณากรอก"
  if (sb1 == "" || sb2 == "" 
            || sb3 == "" || sb4 == "")
            {
    document.querySelector("#showdata").innerHTML
         = "โปรดกรอกข้อมูลให้ครบ";
  } else {
  
    // เช็คเงื่อนไขไม่ผ่าน
    if (percentage >= 39.5) {
      document.querySelector(
        "#showdata"
      ).innerHTML = 
      `จากคะแนนเต็ม400 คุณได้  ${totalgrades} 
      และเปอร์เซ็นต์ ${percentage}%. <br> 
      เกรดของคุณคือ ${grades} คุณผ่าน `;
    } else {
      document.querySelector(
        "#showdata"
      ).innerHTML = 
        `จากคะแนนเต็ม400 คุณได้  ${totalgrades} 
        และเปอร์เซ็นต์ ${percentage}%. <br> 
        เกรดของคุณคือ ${grades} คุณไม่ผ่าน `;
    }
  }
};