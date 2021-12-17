import s from './Dialog.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogsWrap}>
            <div className={s.dialogs}>
                <h1>Dialogs</h1>
                <div className={s.dialogItem + ' ' + s.active}>
                    Alex
                </div>
                <div className={s.dialogItem}>
                    Igor
                </div>
                <div className={s.dialogItem}>
                    Andrey
                </div>
                <div className={s.dialogItem}>
                    Viktor
                </div>
                <div className={s.dialogItem}>
                    Dmitry
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi!
                </div>
                <div className={s.message}>
                    What are you doing?
                </div>
                <div className={s.message}>
                    I learn React
                </div>
            </div>
        </div>
    )
}