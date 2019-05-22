export default function AlertUser(props) {
    const { msgType } = props;
    return (
        <div className="fixed-top p-3" style={{
            top: '20px',
            right: '20px',
            left: 'auto',
            background: 'rgba(239, 239, 239, 0.5)',
            fontSize: '13px',
            borderRadius: '3px',
        }}>
            <div className={msgType === 'ok' ? 'text-success text-sm' : 'text-danger text-sm '}>{props.msg}</div>
        </div>
    );
}