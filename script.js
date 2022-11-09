fetch("Data.json")
.then(function(response){
    return response.json();
 })

 .then(function(books){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let Data of books){
        out += `
         <tr>
            <td>${Data.id}</td>
            <td>${Data.title}</td>
            <td>${Data.author}</td>
            <td>${Data.sub}</td>
            <td>${Data.publishdate}</td>
         </tr>
      `;
   }
   placeholder.innerHTML = out;
});
function filter_rows() {
    allFilters = document.querySelectorAll(".filter")
    var filter_value_dict = {}

    allFilters.forEach((filter_i) => {
        col_index = filter_i.parentElement.getAttribute('col-index')

        value = filter_i.value
        if (value != "all") {
            filter_value_dict[col_index] = value;
        }
    });

    var col_cell_value_dict = {};

    const rows = document.querySelectorAll("#myTable tbody tr");
    rows.forEach((row) => {
        var display_row = true;

        allFilters.forEach((filter_i) => {
            col_index = filter_i.parentElement.getAttribute('col-index')
            col_cell_value_dict[col_index] = row.querySelector("td:nth-child(" + col_index+ ")").innerHTML
        })

        for (var col_i in filter_value_dict) {
            filter_value = filter_value_dict[col_i]
            row_cell_value = col_cell_value_dict[col_i]
            
            if (row_cell_value.indexOf(filter_value) == -1 && filter_value != "all") {
                display_row = false;
                break;
            }


        }

        if (display_row == true) {
            row.style.display = "table-row"

        } else {
            row.style.display = "none"

        }
    })

}
