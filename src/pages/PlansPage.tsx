import { useSelector } from 'react-redux'
import { useAuth } from 'magicauth-client'
import SharkServices from '../app/services/SharkServices'
import { useNavigate } from 'react-router'
import { TailSpin } from 'react-loader-spinner'
import Plan from '../app/items/Plan'
import PlanBox from '../components/plan-box/PlanBox'
import PurchasePopup from '../popup/purchase-popup/PurchasePopup'

const PlansPage = () => {
    const navigate = useNavigate()
    const magic = useAuth()
    const planService = magic.services<SharkServices>().getPlans()

    const selectedItem = planService.getSelected()
    const plans: Plan[] = useSelector((store: any) => store.plans).state

    if(!selectedItem) {
        navigate('/services')
    }

    const startPurchase = (plan: Plan) => {
        planService.selectPlan(plan)

        window.openPopup(
            <PurchasePopup 
                title={ selectedItem.name + ' VÁSÁRLÁSA' }
                versions={ selectedItem.versions }
            />
        )
    }
 
    if(!plans || plans.length === 0) {
        return (
            <div className='align-items-center'>
                <TailSpin
                    width="45"
                    color="white"
                />
            </div>
        )
    }
    return (
        <div className='col-12'>
            <div className="row row-center row-gap">
                {
                    plans.map((element) => (
                        <PlanBox 
                            item={ selectedItem }
                            plan={ element }
                            onClick={ () => startPurchase(element) }
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PlansPage