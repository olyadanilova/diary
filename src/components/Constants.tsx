export const mesageSaveTestArea: string = "Не введен текст заметки!";

export const OPTIONS_DATA = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    //weekday: 'long',
    // hour: 'numeric',
    // minute: 'numeric',
    //second: 'numeric'
};

export interface TypeTableHeader {
    name: string;
    mdCol: string;
    formatter?: (value: any) => string | React.ReactElement<any>;
}

export interface TypeDiary {
    // number: number;
    note: string;
    date: Date;
    rowReady?: string;
    // choice: boolean;
}

export const tableHeader: TypeTableHeader[] =  [
    // {name: "№", mdCol: "col-md-1 col-xs-1"},
    {name: "Заметка", mdCol: "col-md-8 col-xs-8"},
    {name: "Дата", mdCol: "col-md-2 col-xs-2",
        formatter: (value => value? new Date(value).toLocaleString('ru', OPTIONS_DATA): "")},
    {name: "Выбор", mdCol: "col-md-2 col-xs-2"},
    // {name: "Редактирование", mdCol: "col-md-2 col-xs-2"}
];