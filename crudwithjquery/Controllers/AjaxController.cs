using crudwithjquery.data;
using crudwithjquery.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace crudwithjquery.Controllers
{
    public class AjaxController : Controller
    {
        private readonly Application _context;

        public AjaxController(Application context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult AddEmployees(Employee employee)
        {
            var emp = new Employee()
            {
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                Designation = employee.Designation,
                CNIC = employee.CNIC,
                Address = employee.Address,
                HireDate = employee.HireDate

            };
            _context.Employee.Add(emp);
            _context.SaveChanges();
            return new JsonResult("data is stored ");
        }
        //get list of all employee

        [HttpGet]
        public JsonResult getemployee() {
           var result= _context.Employee.ToList();
            return new JsonResult(result);
        }
        //data deleted
        public JsonResult empDelete(int empId) {
            var user  = _context.Employee.
                Where(x => x.EmpId == empId).SingleOrDefault();
            _context.Employee.Remove(user);
            _context.SaveChanges();
            return new JsonResult("Record is deleted");

        }
        //Edit Employee
        public JsonResult Edit(int empId) 
        {
            var data = _context.Employee.
                 Where(x => x.EmpId == empId).SingleOrDefault();
            return new JsonResult(data);
        }
        //update function
        [HttpPost]
        public JsonResult updateemp(Employee employee) {

            _context.Employee.Update(employee);
            _context.SaveChanges();
            return new JsonResult("Record is update");
        }
    }
}
