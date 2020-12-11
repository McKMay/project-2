$(document).ready(function(){
    const table = $('#dt-table').DataTable();
    const tableData = getTableData(table);
    createHighcharts(tableData);
    setTableEvents(table);
    });
    function getTableData(table) {
        const data = [],
        Catagory = [],
        a2018 = [],
        b2019 = [];
        table.rows({ search: "applied" }).every(function() {
        const data = this.data();
        Catagory.push(data[0]);
        a2018.push(parseInt(data[1].replace(/\,/g, "")));
        b2019.push(parseInt(data[2].replace(/\,/g, "")));
        });
        data.push(Catagory, a2018, b2019);
        return data;
        }
        function createHighcharts(data){
            Highcharts.chart("chart", {
            chart: {
            zoomType: 'xy'
            },
            title: {
            text: "Crime Rate in Wichita Kansas"
            },
            subtitle: {
            text: "Update: December 7, 2020 from fbi.org <br>Click and drag in the plot area to zoom in"
            },
            xAxis: [
            {
            categories: data[0],
            labels: {
            rotation: -45
            }
            }
            ],
            yAxis: [
            {
            title: {
            text: "Value"
            }
            }
            ],
            series: [
            {
            name: "a2018",
            type: "lollipop",
            data: data[1],
            color: "blue"
            },
            {
            name: "b2019",
            type: "lollipop",
            data: data[2],
            color: "magenta"
            }
            ],
            tooltip: {
            shared: true
            },
            legend: {
            backgroundColor: "white",
            shadow: true
            },
            credits: {
            enabled: false
            },
            noData: {
            style: {
            fontSize: "16px"
            }
            }
            });
            }
            
