export interface AjaxResult<T> {
    code: number,
    msg: string,
    data: T
}

export interface Page<T>{
    code?: number,
    msg?: string,
    rows: T[],
    total: number
}
