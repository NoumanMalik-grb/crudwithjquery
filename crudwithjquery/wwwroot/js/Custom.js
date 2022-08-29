//Load Data in Table when documents is ready
$(document).ready(function () {
    loadUser();
});
    function loadUser() {
        $.ajax({
            method: "GET",
            url: "/Ajax/getemployee",
            data: {},
            dataType: "JSON",
            success: function (data) {
               
                var html = '';
                $.each(data, function (key, item) {
                    html += '<tr>';
                    html += '<td>' + item.empId + '</td>';
                    html += '<td>' + item.firstName + '</td>';
                    html += '<td>' + item.lastName + '</td>';
                    html += '<td>' + item.designation + '</td>';
                    html += '<td>' + item.cnic + '</td>';
                    html += '<td>' + item.address + '</td>';
                    html += '<td>' + item.hireDate + '</td>';
                    html += '<td>' + '<a class="btn  btn-primary" onclick="Edit(' + item.empId +')">Edit</a>' + '</td>';'|'
                    html += '<td>' + '<a class="btn btn-danger" onclick="Delete('+item.empId+')">Delete</a>' + '</td>';
                    html += '</tr>';
                });
                $('#table_user').html(html);
            }
        });
    }

// modal popup open
$('#btnemployee').click(function () {
    $('#model1').modal('show');
    $('#addemp').css('display', 'block');
    $('#btnUpdate').css('display', 'none');
});
//insert function 
    function submitStudent() {
        var data = $("#studenteForm").serialize();
    console.log(data);
    alert(data);
        $.ajax({
            type: 'POST',
            url: '/Ajax/AddEmployees',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: data,
            success: function (result) {
                alert('Successfully received Data ');
                console.log(result);
                //hide model
                hidemodel();
                // clear text box
                
                loadUser();
            },
            error: function () {
                alert('Failed to receive the Data');
                console.log('Failed');
            }
        });

        
};
function hidemodel() {
    $("#model1").modal('hide')
}


//delete function

function Delete(empId) {
    debugger;

    if (confirm('are you sure you wnat to delete record')) {
        $.ajax({
            url: '/Ajax/empDelete?empId=' + empId,
            success: function () {
                alert('record Deleted');
                loadUser();
            },
            error: function () {
                alert("data can`t be deleted")
            }
        });
    }
}

//Edit function

function Edit(empId) {
    debugger;
    $.ajax({
        url: '/Ajax/Edit?empId=' + empId,
        type: 'Get',
        contentType: 'application/json; charset=utf-8',
        dataType:'json',
        success: function (response) {
            $('#model1').modal('show');
            $('#EmployeeId').val(response.empId);
            $('#fname').val(response.firstName);
            $('#lname').val(response.lastName);
            $('#deg').val(response.designation);
            $('#cn').val(response.cnic);
            $('#add').val(response.address);
            $('#hired').val(response.hireDate);
            //first method
            $('#addemp').css('display', 'none');
            $('#btnUpdate').css('display', 'block');
            //second method
            //$('#addemp').hide();
            //$('#btnUpdate').show();

        },
        error: function () {
            alert('data is not found');
        }
    })
}
// update function
function updateemployee() {
    debugger;
    var data = $("#studenteForm").serialize();
    console.log(data);
    alert(data);
    $.ajax({
        type: 'POST',
        url: '/Ajax/updateemp',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {
            alert('Successfully received Data ');
            console.log(result);
            //hide model
            hidemodel();
            // clear text box

            loadUser();
        },
        error: function () {
            alert('Failed to receive the Data');
            console.log('Failed');
        }
    });

};
