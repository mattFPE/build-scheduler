<script setup>
    import { onMounted, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import DataTable from 'primevue/datatable'
    import Column from 'primevue/column'
    import ColumnGroup from 'primevue/columngroup'
    import Row from 'primevue/row'
    import Dropdown from 'primevue/dropdown'
    import InputText from 'primevue/inputtext'
    import InputNumber from 'primevue/inputtext'
    import Button from 'primevue/button'

    const rawData = [
        {
            item: 'FPE-351-1317',
            dept: 'turbo',
            min: 5,
            qoh: 10,
            dropShips: 3,
            stocking: 5,
            monday: {
                goal: 5,
                actual: 6
            },
            tuesday: {
                goal: 3,
                actual: 9
            },
            wednesday: {
                goal: 10,
                actual: 6
            },
            thursday: {
                goal: 15,
                actual: 2
            },
            friday: {
                goal: 7,
                actual: 3
            },
            planned: 5,
            actual: 6
        },
        {
            item: 'FPE-351-2023',
            dept: 'pumps',
            min: 5,
            qoh: 10,
            dropShips: 3,
            stocking: 5,
            monday: {
                goal: 5,
                actual: 6
            },
            tuesday: {
                goal: 17,
                actual: 5
            },
            wednesday: {
                goal: 8,
                actual: 3
            },
            thursday: {
                goal: 4,
                actual: 0
            },
            friday: {
                goal: 9,
                actual: 3
            },
            planned: 5,
            actual: 6
        }
    ]

    const route = useRoute()
    const tableData = ref()

    const selectedDept = ref(route.params.dept ? route.params.dept : 'all')

    if (selectedDept.value !== 'all') {
        tableData.value = rawData.filter(line => line.dept === selectedDept.value)
    } else {
        tableData.value = rawData
    }

    const depts = ref([
        { name: 'All', code: 'all'},
        { name: 'Turbo', code: 'turbo'},
        { name: 'Pumps', code: 'pumps'}
    ])

    const onCellEditComplete = ({data, newValue, field}) => {
        if (newValue) {
            let value = parseInt(newValue)
            if (value !== value) {
                alert('A number must be entered')
            }
            if (value) {
                let [day, key] = field.split('.')
                data[day][key] = value
            }
        }
    }

    const deptChange = ({ value }) => {
        switch (value) {
            case 'all':
                tableData.value = rawData
                break;
            case 'turbo':
                tableData.value = rawData.filter(line => line.dept === 'turbo')
                break;
            case 'pumps':
                tableData.value = rawData.filter(line => line.dept === 'pumps')
                break;
            default:
                break;
        }
    }

</script>

<template>
    <DataTable
        :value="tableData"
        edit-mode="cell"
        @cell-edit-complete="onCellEditComplete"
        striped-rows
        show-gridlines
    >
        <template #header>
            <div class="flex flex-column">
                <span class="text-xl text-900 font-bold">Build Schedule</span>
                <div class="flex justify-content-between">
                    <Dropdown
                        v-model="selectedDept"
                        :options="depts"
                        @change="deptChange"
                        option-label="name"
                        option-value="code"
                        placeholder="Select a Dept"
                        class=""
                    />
                    <RouterLink :to="{ name: 'home' }">
                        <Button label="Home" />
                    </RouterLink>
                </div>
            </div>
        </template>
        <ColumnGroup type="header">
            <Row>
                <Column header="Item" :rowspan="2" :pt="{ headerContent: 'justify-content-start' }" />
                <Column header="Min" :rowspan="2"/>
                <Column header="Qty On Hand" :rowspan="2"/>
                <Column header="Open Drop Ships" :rowspan="2"/>
                <Column header="Open Stocking" :rowspan="2"/>
                <Column header="Monday" :rowspan="1" :colspan="2" />
                <Column header="Tuesday" :rowspan="1" :colspan="2" />
                <Column header="Wednesday" :rowspan="1" :colspan="2" />
                <Column header="Thursday" :rowspan="1" :colspan="2" />
                <Column header="Friday" :rowspan="1" :colspan="2" />
                <Column header="Planned" :rowspan="2"/>
                <Column header="Actual" :rowspan="2"/>
            </Row>
            <Row>
                <Column header="Goal" :rowspan="1" :colspan="1" />
                <Column header="Actual" :rowspan="1" :colspan="1" />
                <Column header="Goal" :rowspan="1" :colspan="1" />
                <Column header="Actual" :rowspan="1" :colspan="1" />
                <Column header="Goal" :rowspan="1" :colspan="1" />
                <Column header="Actual" :rowspan="1" :colspan="1" />
                <Column header="Goal" :rowspan="1" :colspan="1" />
                <Column header="Actual" :rowspan="1" :colspan="1" />
                <Column header="Goal" :rowspan="1" :colspan="1" />
                <Column header="Actual" :rowspan="1" :colspan="1" />
            </Row>
        </ColumnGroup>
        <Column field="item" />
        <Column field="min" />
        <Column field="qoh" />
        <Column field="dropShips" />
        <Column field="stocking" />
        <Column field="monday.goal">
            <template #editor="{data, field}">
                <InputNumber v-model="data[field]" class="table-editor" />
            </template>
        </Column>
        <Column field="monday.actual">
            <template #editor="{data, field}">
                <InputNumber v-model="data[field]" class="table-editor" />
            </template>
        </Column>
        <Column field="tuesday.goal">
            <template #editor="{data, field}">
                <InputNumber v-model="data[field]" class="table-editor" />
            </template>
        </Column>
        <Column field="tuesday.actual">
            <template #editor="{data, field}">
                <InputNumber v-model="data[field]" class="table-editor" />
            </template>
        </Column>
        <Column field="wednesday.goal">
            <template #editor="{data, field}">
                <InputNumber v-model="data[field]" class="table-editor" />
            </template>
        </Column>
        <Column field="wednesday.actual">
            <template #editor="{data, field}">
                <InputNumber v-model="data[field]" class="table-editor" />
            </template>
        </Column>
        <Column field="thursday.goal">
            <template #editor="{data, field}">
                <InputNumber v-model="data[field]" class="table-editor" />
            </template>
        </Column>
        <Column field="thursday.actual">
            <template #editor="{data, field}">
                <InputNumber v-model="data[field]" class="table-editor" />
            </template>
        </Column>
        <Column field="friday.goal">
            <template #editor="{data, field}">
                <InputNumber v-model="data[field]" class="table-editor" />
            </template>
        </Column>
        <Column field="friday.actual">
            <template #editor="{data, field}">
                <InputNumber v-model="data[field]" class="table-editor" />
            </template>
        </Column>
        <Column field="planned" />
        <Column field="actual" />
    </DataTable>
</template>

<style>
    td:first-child {
        text-align: left;
    }

    td {
        text-align: center;
        border-color: black;
    }

    th {
        background-color: lightblue;
        border-color: black;
    }

    .p-column-header-content {
        justify-content: center;
    }

    .table-editor {
        max-width: 69px;
    }
</style>