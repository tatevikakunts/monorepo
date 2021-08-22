const students = [];
const attendanceList = {
  gName: "Students 2021",
  startDate: "12/04/2021",
  list: [],
  addStudent: function (student) {
    this.list.push(student);
  },
};
const main = () => {
  document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();
    let fullName = document.querySelector("#fullName").value;
    let age = document.querySelector("#age").value;
    function Student(fullName, age) {
      this.fullName = fullName;
      this.age = age;
    }
    const newStudent = new Student(fullName, age);
    attendanceList.addStudent(newStudent);
    generateTable();
  });
};
const generateTable = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.innerText = attendanceList.gName + " " + attendanceList.startDate;
  app.appendChild(h1);

  const table = document.createElement("table");
  table.appendChild(rowHead());
  attendanceList.list.forEach((student) => {
    table.appendChild(stRow(student));
  });

  app.appendChild(table);

  //   const tr = document.createElement("tr");
  //   td = document.createElement("td");
  //   td.innerText = attendanceList.list.newStudent.fullName;
  //   const createCells = () => {
  //     for (i = 1; i < 32; i++) {
  //       const td = document.createElement("td");
  //       tr.appendChild(td);
  //     }
  //     createCells();
  //     tr.appendChild(td);
  //     table.appendChild(tr);
  //     app.appendChild(table);
  //   };
};
const rowHead = (date) => {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.innerText = "Name";
  tr.appendChild(th);
  for (let date = 1; date < 32; date++) {
    const th = document.createElement("th");
    th.innerText = date;
    tr.appendChild(th);
  }
  return tr;
};
const stRow = (student) => {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.innerText = student.fullName;
  tr.appendChild(td);
  for (let i = 1; i < 32; i++) {
    const td = document.createElement("td");
    tr.appendChild(td);
  }
  return tr;
};

main();
