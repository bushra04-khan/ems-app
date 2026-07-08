localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Create the monthly sales report.",
        taskDate: "2026-07-05",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Customer Database",
        taskDescription: "Add new customer records.",
        taskDate: "2026-07-01",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Team Meeting",
        taskDescription: "Present project progress to the team.",
        taskDate: "2026-07-03",
        category: "Meeting"
      }
    ]
  },

  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve authentication issue.",
        taskDate: "2026-07-05",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate's pull request.",
        taskDate: "2026-07-02",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test all user APIs.",
        taskDate: "2026-07-06",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Update",
        taskDescription: "Deploy latest version to production.",
        taskDate: "2026-07-04",
        category: "Deployment"
      }
    ]
  },

  {
    id: 3,
    firstName: "Ananya",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create homepage mockup.",
        taskDate: "2026-07-01",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Icons",
        taskDescription: "Design icons for dashboard.",
        taskDate: "2026-07-06",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Logo",
        taskDescription: "Redesign company logo.",
        taskDate: "2026-07-03",
        category: "Branding"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Banner Design",
        taskDescription: "Create promotional banner.",
        taskDate: "2026-07-02",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prototype Dashboard",
        taskDescription: "Build dashboard prototype.",
        taskDate: "2026-07-08",
        category: "UI"
      }
    ]
  },

  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Document API endpoints.",
        taskDate: "2026-07-05",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements.",
        taskDate: "2026-07-02",
        category: "Meeting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Research Libraries",
        taskDescription: "Compare React UI libraries.",
        taskDate: "2026-07-07",
        category: "Research"
      }
    ]
  },

  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Backup production database.",
        taskDate: "2026-07-05",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve SQL query performance.",
        taskDate: "2026-07-03",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Monitoring",
        taskDescription: "Check server health metrics.",
        taskDate: "2026-07-04",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Review security configurations.",
        taskDate: "2026-07-08",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Dependencies",
        taskDescription: "Upgrade project packages.",
        taskDate: "2026-07-01",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure deployment pipeline.",
        taskDate: "2026-07-09",
        category: "DevOps"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage = ()=>{
    const employees= JSON.parse(localStorage.getItem('employees'))||[]
    const admin= JSON.parse(localStorage.getItem('admin'))||[]
    
    return {employees,admin}
}