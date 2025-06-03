
interface ConditionItemProps {
    conditionType: 'wind' | 'pressure' | 'humidity',
    value: number
}

export default function ConditionItem({ conditionType, value }: ConditionItemProps) {
    let units: string;
    switch(conditionType){
        case 'wind':
            units = 'km/h'
            break
        case 'humidity':
            units = '%'
            break
        case 'pressure':
            units = ''
            break
    }

    return (
        <>
            <div className="condition-block">
                <div className={conditionType + '-icon'}></div>
                <div className="condition-block-wrap">
                    <h3>{conditionType[0].toUpperCase() + conditionType.slice(1)}</h3>
                    <h3 className={conditionType + '-value'}>{Math.round(value) + units}</h3>
                </div>

            </div>
        </>
    )
}
