const vm = new Vue({
    el: "#intro",
    data: {
        tasks: [],
        form: {
            taskName: "",
            taskType: "personal"
        },
        filterTaskType: ""
    },
    methods: {
        addTask() {
            this.tasks.push({
                name: this.form.taskName,
                type: this.form.taskType
            })
        },
        removeTask(index) {
            swal({
                title: "Deseja mesmo remover?",
                text: `A tarefa ${this.tasks[index].name} será removida para sempre!`,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    this.tasks.splice(index, 1)
                    swal("Tarefa removida.", {
                        icon: "success",
                    })
                    localStorage.setItem("tasks", JSON.stringify(this.tasks))
                }
            })
        },
        validateSubmit() {
            let sameName = this.tasks.some((task) => task.name.toLowerCase() == this.form.taskName.toLowerCase())
            if (!this.form.taskName) {
                swal("Erro", "Campo nome obrigatório.", "error")
            } else if (sameName) {
                swal("Erro", "Já existe uma tarefa com o mesmo nome.", "error")
            } else {
                this.addTask()
                this.form.taskName = ""
                this.form.taskType = "personal"
            }
        }
    },
    computed: {
        printTasks() {
            if (!this.filterTaskType) {
                return this.tasks
            } else {
                return this.tasks.filter(task => task.type === this.filterTaskType)
            }
        }
    },
    created() {
        if(localStorage.tasks) {
            this.tasks = JSON.parse(localStorage.getItem("tasks"))            
        }
    }
})

function store() {
    localStorage.setItem("tasks", JSON.stringify(vm.tasks))
}