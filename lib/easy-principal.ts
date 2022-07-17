import { CompositePrincipal, ServicePrincipalOpts } from 'aws-cdk-lib/aws-iam'
import { AwsService, awsServices } from './services'
import { ServicePrincipal} from 'aws-cdk-lib/aws-iam'

const principalBase = '.amazonaws.com'

const servicePrincipalMap = awsServices.reduce((map, service) => {
  const returnMap = map
  returnMap[service] = `${service}${principalBase}`
  return returnMap
}, {} as Record<AwsService, string>)

interface EasyServicePrincipalProps extends ServicePrincipalOpts  {}

class EasyServicePrincipal extends ServicePrincipal {
  constructor(service: AwsService, opts?: EasyServicePrincipalProps)  {
    super(service, opts)
  }

  static composite(services: AwsService[], opts?: ServicePrincipalOpts) {
    return new CompositePrincipal(...services.map(service => new EasyServicePrincipal(service, opts)) )
  }
}

export {
  EasyServicePrincipal,
}
