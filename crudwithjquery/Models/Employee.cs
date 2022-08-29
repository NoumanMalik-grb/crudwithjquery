using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace crudwithjquery.Models
{
    public class Employee
    {
        [Key]
        public int EmpId { get; set; }
        [Required(ErrorMessage = "Please Enter the FirstNameName")]
        [StringLength(50)]
        [Column(TypeName = "nvarchar(50)")]
        public string FirstName { get; set; } = default!;
        [Required(ErrorMessage = "please Enter The LastName")]
        [StringLength(50)]
        [Column(TypeName = "nvarchar(50)")]
        public string LastName { get; set; } = default!;
        [Required(ErrorMessage = "What`s your Designation")]
        [StringLength(50)]
        [Column(TypeName = "nvarchar(50)")]
        public string Designation { get; set; } = default!;
        [Required(ErrorMessage = "Put Your CNIC number Here")]
        [StringLength(25)]
        [Column(TypeName = "nvarchar(25)")]
        public string CNIC { get; set; } = default!;
        [Required(ErrorMessage = "Write your Add Here in ")]
        [StringLength(200)]
        [Column(TypeName = "nvarchar(200)")]
        public string Address { get; set; } = default!;

        [Required(ErrorMessage = "Hire date is required befor submiting the form")]
        public DateTime HireDate { get; set; }


    }
}
