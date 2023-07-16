import React, { useState, useEffect } from "react";
import { Employee } from "./types";

const EmployeeForm: React.FC<{
  onSubmit: (employee: Employee) => void;
}> = ({ onSubmit }) => {
  const [employee, setEmployee] = useState<Employee>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    age: 0,
    salary: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(employee);
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      age: 0,
      salary: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={employee.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={employee.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={employee.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={employee.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={employee.age}
        onChange={handleChange}
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={employee.salary}
        onChange={handleChange}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

const EmployeeList: React.FC<{
  employees: Employee[];
  onDelete: (id: string) => void;
  onEdit: (employee: Employee) => void;
}> = ({ employees, onDelete, onEdit }) => {
  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>
          <p>First Name: {employee.firstName}</p>
          <p>Last Name: {employee.lastName}</p>
          <p>Email: {employee.email}</p>
          <p>Phone: {employee.phone}</p>
          <p>Department: {employee.department}</p>
          <p>Age: {employee.age}</p>
          <p>Salary: {employee.salary}</p>
          <button onClick={() => onDelete(employee.id)}>Delete</button>
          <button onClick={() => onEdit(employee)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Employee[]>([]);

  useEffect(() => {
    // Retrieve employees from local storage
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  useEffect(() => {
    // Store employees in local storage whenever it changes
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    // Filter employees based on search query
    const filteredEmployees = employees.filter((employee) =>
      Object.values(employee)
        .filter((value) => typeof value === "string")
        .some((value) => value.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setSearchResults(filteredEmployees);
  }, [employees, searchQuery]);

  const addEmployee = (employee: Employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  const deleteEmployee = (id: string) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  const editEmployee = (editedEmployee: Employee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === editedEmployee.id ? editedEmployee : employee
      )
    );
  };

  return (
    <div>
      <h1>Employee CRUD Application</h1>
      <EmployeeForm onSubmit={addEmployee} />
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <EmployeeList
        employees={searchResults}
        onDelete={deleteEmployee}
        onEdit={editEmployee}
      />
    </div>
  );
};

export default App;
