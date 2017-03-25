var Student = {
	data : [],
	viewStudent : function() {
		var listStudent = this.data;
		for(var i = 0; i < listStudent; i++) {
			document.write("<div>" + listStudent[i].id + "|"
			+ listStudent[i].name + "|"
			+ listStudent[i].email + "</div>");
		}
	},
	addStudent : function(id, name, email) {
		var item = {
			id : id,
			name : name,
			email : email
		};
		this.data.push(item);
	},
	removeStudent : function(id) {
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].id === id) {
				this.data.splice(i, 1);
			}
		}
	},
	editStudent : function(id, name, email) {
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].id === id) {
				this.data[i].name = name;
				this.data[i].email = email;
			}
		}
	}
};

document.write('<h4>Danh sách sinh viên ban đầu</h4>');
Student.viewStudent();
 
document.write('<h4>Danh sách sinh viên sau khi thêm hai sinh viên</h4>');
Student.addStudent("20125577", 'Đinh Huy Hung', "20125577@student.hut.edu.vn");
Student.addStudent("20125501", 'Đin Đức Hải', "20125501@student.hut.edu.vn");
Student.viewStudent();
 
document.write('<h4>Danh sách sinh viên sau khi xóa một sinh viên</h4>');
Student.removeStudent('20125501');
Student.viewStudent();
 
document.write('<h4>Danh sách sinh viên sau khi sửa thông tin</h4>');
Student.editStudent('20125577', "Huy D. Hung", "hebitaxy@gmail.com");
Student.viewStudent();