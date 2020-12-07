const form = document.querySelector("#heartForm");
var feature0,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  feature7;
var predict = null;
console.log(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  setVal();
  doCal();
});

function setVal() {
  feature0 = document.querySelector("input[name='feature0']").value;
  feature1 = document.querySelector("input[name='feature1']").value;
  feature2 = document.querySelector("input[name='feature2']").value;
  feature3 = document.querySelector("input[name='feature3']").value;
  feature4 = document.querySelector("input[name='feature4']").value;
  feature5 = document.querySelector("input[name='feature5']").value;
  feature6 = document.querySelector("input[name='feature6']").value;
  feature7 = document.querySelector("input[name='feature7']").value;
  console.log(
    feature0,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    feature7
  );
}

function doCal() {
  if (feature1 <= 0.5) {
    if (feature7 <= 2.5) {
      if (feature6 <= 0.5) {
        if (feature4 <= 144.5) {
          if (feature2 <= 113.5) predict = 1.0;
          else if (feature2 > 113.5) predict = 0.0;
        } else if (feature4 > 144.5) predict = 1.0;
      } else if (feature6 > 0.5) {
        if (feature3 <= 302.5) predict = 0.0;
        else if (feature3 > 302.5) {
          if (feature0 <= 64.5) predict = 1.0;
          else if (feature0 > 64.5) predict = 0.0;
        }
      }
    } else if (feature7 > 2.5) {
      if (feature5 <= 0.55) {
        if (feature4 <= 111.5) predict = 1.0;
        else if (feature4 > 111.5) predict = 0.0;
      } else if (feature5 > 0.55) predict = 0.0;
    }
  } else if (feature1 > 0.5) {
    if (feature7 <= 2.5) {
      if (feature0 <= 55.5) predict = 1.0;
      else if (feature0 > 55.5) {
        if (feature7 <= 1.5) predict = 0.0;
        else if (feature7 > 1.5) predict = 1.0;
      }
    } else if (feature7 > 2.5) {
      if (feature4 <= 132.5) predict = 0.0;
      else if (feature4 > 132.5) {
        if (feature2 <= 179.0) {
          if (feature5 <= 1.95) predict = 1.0;
          else if (feature5 > 1.95) predict = 0.0;
        } else if (feature2 > 179.0) predict = 0.0;
      }
    }
  }
  const body = document.querySelector("body");
  const h2 = document.createElement("h2");
  h2.textContent = "결과 : ";
  if (predict == 0) {
    h2.textContent += "심장병 의심이 되지 않습니다";
  } else {
    h2.textContent += "심장병이 의심됩니다. 정밀 검진을 받아보세요";
  }
  body.innerHTML = "";
  body.append(h2);
}
