import React, { useMemo } from 'react';
import { Story } from '@storybook/react';

import { FileViewer, FileViewerProps } from '../components/FileViewer';
import { useAnnotations } from '../hooks/useAnnotations';
import { Button } from '../components/Button';
import { Annotation, SVRL } from '../types/validations';
import { getSVRLFailedAssertions } from '../helpers/validations';
import { SpaceBetween } from '../layouts/SpaceBetween';

// version via a script tag in index.html.
const SaxonJS = (window as any).SaxonJS;

export default {
  title: 'FileViewer',
  component: FileViewer,
};

export const Default: Story<FileViewerProps> = (args) => {
  const svrl: SVRL = {
    'svrl:schematron-output': {
      'xmlns:unit': 'http://us.gov/testing/unit-testing',
      'doc:rule': {
        'xmlns:doc':
          'https://fedramp.gov/oscal/fedramp-automation-documentation',
        'xmlns:sch': 'http://purl.oclc.org/dsdl/schematron',
        'xmlns:feddoc': 'http://us.gov/documentation/federal-documentation',
        content: 'A FedRAMP SSP must incorporate inventory-item elements',
      },
      schemaVersion: '',
      'xmlns:map': 'http://www.w3.org/2005/xpath-functions/map',
      'xmlns:lv': 'local-validations',
      'xmlns:saxon': 'http://saxon.sf.net/',
      title: 'FedRAMP System Security Plan Validations',
      'xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
      'xmlns:array': 'http://www.w3.org/2005/xpath-functions/array',
      'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
      'svrl:active-pattern': [
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'parameters-and-variables',
          id: 'parameters-and-variables',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'phase2',
          id: 'phase2',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'Basic resource constraints',
          id: 'resources',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'base64 attachments',
          id: 'base64',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'Constraints for specific attachments',
          id: 'specific-attachments',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'A FedRAMP SSP must incorporate one policy document and one procedure document for each of the 17 NIST SP 800-54 Revision 4 control\n            families',
          id: 'policy-and-procedure',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'A FedRAMP SSP must define a Privacy Point of Contact',
          id: 'privacy1',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'A FedRAMP SSP may need to incorporate a PIA and possibly a SORN',
          id: 'privacy2',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans Appendix A',
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'FIPS 140 Validation',
          id: 'fips-140',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??4.4',
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'Security Objectives Categorization (FIPS 199)',
          id: 'fips-199',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??4.3',
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'SP 800-60v2r1 Information Types:',
          id: 'sp800-60',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??4.5',
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'Digital Identity Determination',
          id: 'sp800-63',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'FedRAMP SSP inventory items',
          id: 'system-inventory',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'basic-system-characteristics',
          id: 'basic-system-characteristics',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'fedramp-data',
          id: 'fedramp-data',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'Roles, Locations, Parties, Responsibilities',
          id: 'general-roles',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??5.2',
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'Roles related to implemented requirements',
          id: 'implementation-roles',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'user-properties',
          id: 'user-properties',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??4.17 Authorization Boundary Diagram',
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'Authorization Boundary Diagram',
          id: 'authorization-boundary',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??4.22 Network Architecture Diagram',
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'Network Architecture Diagram',
          id: 'network-architecture',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??4.24 Data Flow Diagram',
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'Data Flow Diagram',
          id: 'data-flow',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'control-implementation',
          id: 'control-implementation',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'Cloud Service and Deployment Models',
          id: 'cloud-models',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'Interconnections',
          id: 'interconnects',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'protocols',
          id: 'protocols',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'dns',
          id: 'dns',
        },
        {
          document: 'file:/upload/AwesomeCloudSSP1.xml',
          name: 'info',
          id: 'info',
        },
      ],
      'svrl:fired-rule': [
        {
          context: '/',
        },
        {
          context: '/oscal:system-security-plan',
        },
        {
          context: '/oscal:system-security-plan/oscal:metadata',
        },
        {
          context:
            'oscal:system-security-plan/oscal:system-implementation/oscal:component',
        },
        {
          context: '/oscal:system-security-plan/oscal:control-implementation',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component/oscal:description',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component/oscal:description',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component/oscal:description',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component/oscal:description',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component/oscal:description',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component/oscal:description',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component/oscal:description',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:control-implementation/oscal:implemented-requirement/oscal:statement/oscal:by-component/oscal:description',
        },
        {
          context:
            '/oscal:system-security-plan/oscal:back-matter/oscal:resource',
        },
        {
          context: 'oscal:resource',
        },
        {
          context:
            'oscal:back-matter/oscal:resource/oscal:prop[@name eq \u0027type\u0027]',
        },
        {
          context: 'oscal:back-matter/oscal:resource/oscal:rlink',
        },
        {
          context: 'oscal:back-matter/oscal:resource',
        },
        {
          see: 'https://github.com/18F/fedramp-automation/blob/master/documents/Guide_to_OSCAL-based_FedRAMP_System_Security_Plans_(SSP).pdf',
          context: 'oscal:back-matter',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.2',
          context: 'oscal:metadata',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.4',
          context:
            '/oscal:system-security-plan/oscal:system-characteristics/oscal:system-information',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.4',
          context: 'oscal:back-matter',
        },
        {
          context: 'oscal:system-implementation',
        },
        {
          context: 'oscal:system-characteristics',
        },
        {
          context: 'oscal:security-sensitivity-level',
        },
        {
          context: 'oscal:security-impact-level',
        },
        {
          context:
            'oscal:security-objective-confidentiality | oscal:security-objective-integrity | oscal:security-objective-availability',
        },
        {
          context:
            'oscal:security-objective-confidentiality | oscal:security-objective-integrity | oscal:security-objective-availability',
        },
        {
          context:
            'oscal:security-objective-confidentiality | oscal:security-objective-integrity | oscal:security-objective-availability',
        },
        {
          context: 'oscal:system-information',
        },
        {
          context: 'oscal:information-type',
        },
        {
          context: 'oscal:categorization',
        },
        {
          context: 'oscal:information-type-id',
        },
        {
          context:
            'oscal:confidentiality-impact | oscal:integrity-impact | oscal:availability-impact',
        },
        {
          context: 'oscal:base | oscal:selected',
        },
        {
          context: 'oscal:base | oscal:selected',
        },
        {
          context:
            'oscal:confidentiality-impact | oscal:integrity-impact | oscal:availability-impact',
        },
        {
          context: 'oscal:base | oscal:selected',
        },
        {
          context: 'oscal:base | oscal:selected',
        },
        {
          context:
            'oscal:confidentiality-impact | oscal:integrity-impact | oscal:availability-impact',
        },
        {
          context: 'oscal:base | oscal:selected',
        },
        {
          context: 'oscal:base | oscal:selected',
        },
        {
          context: 'oscal:system-characteristics',
        },
        {
          context: '/oscal:system-security-plan/oscal:system-implementation',
        },
        {
          context: 'oscal:component',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??6.5',
          context: 'oscal:inventory-item',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-id\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027virtual\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027public\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027asset-type\u0027]',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027scan-type\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027allows-authenticated-scan\u0027]',
        },
        {
          context: 'oscal:prop[@name eq \u0027is-scanned\u0027]',
        },
        {
          context: 'oscal:system-characteristics',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??5.4.6',
          context: 'oscal:system-implementation',
        },
        {
          context:
            'oscal:system-characteristics/oscal:system-id[@identifier-type eq \u0027https://fedramp.gov\u0027]',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??4.6-??4.11',
          context: 'oscal:metadata',
        },
        {
          context: 'oscal:implemented-requirement',
        },
        {
          context: 'oscal:responsible-role',
        },
        {
          context: 'oscal:user',
        },
        {
          context: 'oscal:user/oscal:prop[@name eq \u0027type\u0027]',
        },
        {
          context:
            'oscal:user/oscal:prop[@name eq \u0027privilege-level\u0027]',
        },
        {
          context: 'oscal:system-characteristics',
        },
        {
          context: 'oscal:authorization-boundary',
        },
        {
          context: 'oscal:authorization-boundary/oscal:diagram',
        },
        {
          context: 'oscal:authorization-boundary/oscal:diagram/oscal:link',
        },
        {
          context: 'oscal:system-characteristics',
        },
        {
          context: 'oscal:system-characteristics',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??5.1',
          context: 'oscal:system-security-plan',
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??5.1',
          context: 'oscal:import-profile',
        },
        {
          context: 'oscal:control-implementation',
        },
        {
          context: 'oscal:implemented-requirement',
        },
        {
          context:
            'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027implementation-status\u0027]',
        },
        {
          context: 'oscal:set-parameter',
        },
        {
          context: 'oscal:set-parameter',
        },
        {
          context: 'oscal:system-characteristics',
        },
        {
          context: 'oscal:system-implementation',
        },
        {
          context: 'oscal:system-implementation',
        },
        {
          context: 'oscal:system-security-plan',
        },
      ],
      'svrl:ns-prefix-in-attribute-values': [
        {
          prefix: 'f',
          uri: 'https://fedramp.gov/ns/oscal',
        },
        {
          prefix: 'oscal',
          uri: 'http://csrc.nist.gov/ns/oscal/1.0',
        },
        {
          prefix: 'fedramp',
          uri: 'https://fedramp.gov/ns/oscal',
        },
        {
          prefix: 'lv',
          uri: 'local-validations',
        },
        {
          prefix: 'array',
          uri: 'http://www.w3.org/2005/xpath-functions/array',
        },
        {
          prefix: 'map',
          uri: 'http://www.w3.org/2005/xpath-functions/map',
        },
        {
          prefix: 'unit',
          uri: 'http://us.gov/testing/unit-testing',
        },
      ],
      'xmlns:schold': 'http://www.ascc.net/xml/schematron',
      'xmlns:f': 'https://fedramp.gov/ns/oscal',
      'xmlns:svrl': 'http://purl.oclc.org/dsdl/svrl',
      'xmlns:xs': 'http://www.w3.org/2001/XMLSchema',
      'xmlns:oscal': 'http://csrc.nist.gov/ns/oscal/1.0',
      'svrl:failed-assert': [
        {
          role: 'error',
          test: 'not(exists($core-missing))',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'incomplete-core-implemented-requirements',
          'svrl:text':
            'A FedRAMP SSP must implement the most important controls.',
          'svrl:diagnostic-reference': {
            diagnostic: 'incomplete-core-implemented-requirements-diagnostic',
            content:
              'A FedRAMP SSP must implement the most important 100 core  controls: ac-1 ac-2 ac-2.2 ac-2.3 ac-2.5 ac-2.12 ac-4 ac-6.9 ac-7 ac-11 ac-12 ac-17 ac-17.9 ac-18 ac-19 ac-19.5 ac-22 at-1 at-2 at-3 at-4 au-1 au-2 au-2.3 au-6 au-8.1 au-9.2 au-11 ca-1 ca-2 ca-2.2 ca-3 ca-3.5 ca-5 ca-7 ca-8 ca-9 cm-1 cm-2.1 cm-3 cm-5.5 cm-6 cm-7.1 cm-7.5 cm-8.3 cm-9 cp-1 cp-2 cp-3 cp-4 cp-7 cp-9 cp-9.1 ia-1 ia-4 ia-5 ia-5.1 ir-1 ir-2 ir-3 ir-6 ir-8 ir-9.2 ma-1 ma-4 mp-1 mp-6.2 pe-1 pe-2 pe-3 pe-6 pe-8 pl-1 pl-2 pl-8 ps-1 ps-3 ps-4 ps-5 ps-6 ps-7 ra-1 ra-5 ra-5.2 ra-5.5 sa-1 sc-1 sc-7.4 sc-13 si-1 si-2 si-2.2 si-3 si-4 si-4.4 si-4.14 si-6 si-7.1 si-8.1 si-8.2.',
          },
        },
        {
          role: 'warning',
          test: 'not(exists($all-missing))',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'incomplete-all-implemented-requirements',
          'svrl:text': 'A FedRAMP SSP must implement all required controls.',
          'svrl:diagnostic-reference': {
            diagnostic: 'incomplete-all-implemented-requirements-diagnostic',
            content:
              'A FedRAMP SSP must implement 324 controls overall: ac-1 ac-2 ac-2.1 ac-2.2 ac-2.3 ac-2.4 ac-2.5 ac-2.7 ac-2.9 ac-2.10 ac-2.12 ac-3 ac-4 ac-4.21 ac-5 ac-6 ac-6.1 ac-6.2 ac-6.5 ac-6.9 ac-6.10 ac-7 ac-8 ac-10 ac-11 ac-11.1 ac-12 ac-14 ac-17 ac-17.1 ac-17.2 ac-17.3 ac-17.4 ac-17.9 ac-18 ac-18.1 ac-19 ac-19.5 ac-20 ac-20.1 ac-20.2 ac-21 ac-22 at-1 at-2 at-2.2 at-3 at-4 au-1 au-2 au-2.3 au-3 au-3.1 au-4 au-5 au-6 au-6.1 au-6.3 au-7 au-7.1 au-8 au-8.1 au-9 au-9.2 au-9.4 au-11 au-12 ca-1 ca-2 ca-2.1 ca-2.2 ca-2.3 ca-3 ca-3.3 ca-3.5 ca-5 ca-6 ca-7 ca-7.1 ca-8 ca-8.1 ca-9 cm-1 cm-2 cm-2.1 cm-2.2 cm-2.3 cm-2.7 cm-3 cm-4 cm-5 cm-5.1 cm-5.3 cm-5.5 cm-6 cm-6.1 cm-7 cm-7.1 cm-7.2 cm-7.5 cm-8.1 cm-8.3 cm-8.5 cm-9 cm-10 cm-10.1 cm-11 cp-1 cp-2 cp-2.1 cp-2.2 cp-2.3 cp-2.8 cp-3 cp-4 cp-4.1 cp-6 cp-6.1 cp-6.3 cp-7 cp-7.1 cp-7.2 cp-7.3 cp-8 cp-8.1 cp-8.2 cp-9 cp-9.1 cp-9.3 cp-10 cp-10.2 ia-1 ia-2 ia-2.1 ia-2.2 ia-2.3 ia-2.5 ia-2.8 ia-2.11 ia-2.12 ia-3 ia-4 ia-4.4 ia-5 ia-5.1 ia-5.2 ia-5.3 ia-5.4 ia-5.6 ia-5.7 ia-5.11 ia-6 ia-7 ia-8 ia-8.1 ia-8.2 ia-8.3 ia-8.4 ir-1 ir-2 ir-3 ir-3.2 ir-4 ir-4.1 ir-5 ir-6 ir-6.1 ir-7 ir-7.1 ir-7.2 ir-8 ir-9 ir-9.1 ir-9.2 ir-9.3 ir-9.4 ma-1 ma-2 ma-3 ma-3.1 ma-3.2 ma-3.3 ma-4 ma-4.2 ma-5 ma-5.1 ma-6 mp-1 mp-2 mp-3 mp-4 mp-5 mp-5.4 mp-6 mp-6.2 mp-7 mp-7.1 pe-1 pe-2 pe-3 pe-4 pe-5 pe-6 pe-6.1 pe-8 pe-9 pe-10 pe-11 pe-12 pe-13 pe-13.2 pe-13.3 pe-14 pe-14.2 pe-15 pe-16 pe-17 pl-1 pl-2 pl-2.3 pl-4 pl-4.1 pl-8 ps-1 ps-2 ps-3 ps-3.3 ps-4 ps-5 ps-6 ps-7 ps-8 ra-1 ra-2 ra-3 ra-5 ra-5.1 ra-5.2 ra-5.3 ra-5.5 ra-5.6 ra-5.8 sa-1 sa-2 sa-3 sa-4 sa-4.1 sa-4.2 sa-4.8 sa-4.9 sa-4.10 sa-5 sa-8 sa-9 sa-9.1 sa-9.2 sa-9.4 sa-9.5 sa-10 sa-10.1 sa-11 sa-11.1 sa-11.2 sa-11.8 sc-1 sc-2 sc-4 sc-5 sc-6 sc-7 sc-7.3 sc-7.4 sc-7.5 sc-7.7 sc-7.8 sc-7.12 sc-7.13 sc-7.18 sc-8 sc-8.1 sc-10 sc-12 sc-12.2 sc-12.3 sc-13 sc-15 sc-17 sc-18 sc-19 sc-20 sc-21 sc-22 sc-23 sc-28 sc-28.1 sc-39 si-1 si-2 si-2.2 si-2.3 si-3 si-3.1 si-3.2 si-3.7 si-4 si-4.1 si-4.2 si-4.4 si-4.5 si-4.14 si-4.16 si-4.23 si-5 si-6 si-7 si-7.1 si-7.7 si-8 si-8.1 si-8.2 si-10 si-11 si-12 si-16.',
          },
        },
        {
          role: 'warning',
          test: '/oscal:system-security-plan/oscal:system-implementation/oscal:component[@uuid eq $component-ref] \u003d\u003e exists()',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:implemented-requirement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:statement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:by-component[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'invalid-component-match',
          'svrl:text':
            'Response statement\n                cites a component in the system implementation inventory.',
          'svrl:diagnostic-reference': {
            diagnostic: 'invalid-component-match-diagnostic',
            content:
              'Response statement cm-8_smt with component reference UUID \u0027 19a38c5f-e4af-494b-a482-acf22c28a448\u0027 is not in the system implementation inventory, and cannot be used to define a control.',
          },
        },
        {
          role: 'error',
          test: '$description-length ge $required-length',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:implemented-requirement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:statement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:by-component[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:description[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'incomplete-response-description',
          'svrl:text':
            'Response statement component description has adequate length.',
          'svrl:diagnostic-reference': {
            diagnostic: 'incomplete-response-description-diagnostic',
            content:
              'Response statement component description for cm-8_smt is too short with 12 characters. It must be 20 characters long.',
          },
        },
        {
          role: 'warning',
          test: '/oscal:system-security-plan/oscal:system-implementation/oscal:component[@uuid eq $component-ref] \u003d\u003e exists()',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:implemented-requirement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:statement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][2]/*:by-component[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'invalid-component-match',
          'svrl:text':
            'Response statement\n                cites a component in the system implementation inventory.',
          'svrl:diagnostic-reference': {
            diagnostic: 'invalid-component-match-diagnostic',
            content:
              'Response statement cm-8_smt.a with component reference UUID \u0027 19a38c5f-e4af-494b-a482-acf22c28a448\u0027 is not in the system implementation inventory, and cannot be used to define a control.',
          },
        },
        {
          role: 'warning',
          test: '/oscal:system-security-plan/oscal:system-implementation/oscal:component[@uuid eq $component-ref] \u003d\u003e exists()',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:implemented-requirement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:statement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][3]/*:by-component[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'invalid-component-match',
          'svrl:text':
            'Response statement\n                cites a component in the system implementation inventory.',
          'svrl:diagnostic-reference': {
            diagnostic: 'invalid-component-match-diagnostic',
            content:
              'Response statement cm-8_smt.a.1 with component reference UUID \u0027 19a38c5f-e4af-494b-a482-acf22c28a448\u0027 is not in the system implementation inventory, and cannot be used to define a control.',
          },
        },
        {
          role: 'warning',
          test: '/oscal:system-security-plan/oscal:system-implementation/oscal:component[@uuid eq $component-ref] \u003d\u003e exists()',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:implemented-requirement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:statement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][4]/*:by-component[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'invalid-component-match',
          'svrl:text':
            'Response statement\n                cites a component in the system implementation inventory.',
          'svrl:diagnostic-reference': {
            diagnostic: 'invalid-component-match-diagnostic',
            content:
              'Response statement cm-8_smt.a.2 with component reference UUID \u0027 19a38c5f-e4af-494b-a482-acf22c28a448\u0027 is not in the system implementation inventory, and cannot be used to define a control.',
          },
        },
        {
          role: 'warning',
          test: '/oscal:system-security-plan/oscal:system-implementation/oscal:component[@uuid eq $component-ref] \u003d\u003e exists()',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:implemented-requirement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:statement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][5]/*:by-component[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'invalid-component-match',
          'svrl:text':
            'Response statement\n                cites a component in the system implementation inventory.',
          'svrl:diagnostic-reference': {
            diagnostic: 'invalid-component-match-diagnostic',
            content:
              'Response statement cm-8_smt.a.3 with component reference UUID \u0027 19a38c5f-e4af-494b-a482-acf22c28a448\u0027 is not in the system implementation inventory, and cannot be used to define a control.',
          },
        },
        {
          role: 'warning',
          test: '/oscal:system-security-plan/oscal:system-implementation/oscal:component[@uuid eq $component-ref] \u003d\u003e exists()',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:implemented-requirement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:statement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][6]/*:by-component[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'invalid-component-match',
          'svrl:text':
            'Response statement\n                cites a component in the system implementation inventory.',
          'svrl:diagnostic-reference': {
            diagnostic: 'invalid-component-match-diagnostic',
            content:
              'Response statement cm-8_smt.a.4 with component reference UUID \u0027 19a38c5f-e4af-494b-a482-acf22c28a448\u0027 is not in the system implementation inventory, and cannot be used to define a control.',
          },
        },
        {
          role: 'warning',
          test: '/oscal:system-security-plan/oscal:system-implementation/oscal:component[@uuid eq $component-ref] \u003d\u003e exists()',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:implemented-requirement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:statement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][7]/*:by-component[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'invalid-component-match',
          'svrl:text':
            'Response statement\n                cites a component in the system implementation inventory.',
          'svrl:diagnostic-reference': {
            diagnostic: 'invalid-component-match-diagnostic',
            content:
              'Response statement cm-8_smt.b with component reference UUID \u0027 19a38c5f-e4af-494b-a482-acf22c28a448\u0027 is not in the system implementation inventory, and cannot be used to define a control.',
          },
        },
        {
          role: 'warning',
          test: '/oscal:system-security-plan/oscal:system-implementation/oscal:component[@uuid eq $component-ref] \u003d\u003e exists()',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:implemented-requirement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:statement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][8]/*:by-component[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'invalid-component-match',
          'svrl:text':
            'Response statement\n                cites a component in the system implementation inventory.',
          'svrl:diagnostic-reference': {
            diagnostic: 'invalid-component-match-diagnostic',
            content:
              'Response statement cm-8_fr_smt.1 with component reference UUID \u0027 19a38c5f-e4af-494b-a482-acf22c28a448\u0027 is not in the system implementation inventory, and cannot be used to define a control.',
          },
        },
        {
          role: 'warning',
          test: '@value \u003d $attachment-types',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:back-matter[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:resource[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:prop[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'attachment-type-is-valid',
          'svrl:text':
            'A supporting artifact found in a citation should have an allowed attachment type.',
          'svrl:diagnostic-reference': {
            diagnostic: 'attachment-type-is-valid-diagnostic',
            content:
              'Found unknown attachment type ??diagram?? in "Authorization Boundary Diagram" resource.',
          },
        },
        {
          role: 'warning',
          test: 'oscal:base64',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:back-matter[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:resource[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'resource-has-base64',
          'svrl:text':
            'A supporting artifact found in a citation should have an embedded attachment element.',
          'svrl:diagnostic-reference': {
            diagnostic: 'resource-has-base64-diagnostic',
            content: 'This resource lacks a base64 element.',
          },
        },
        {
          role: 'error',
          test: 'oscal:resource[oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027type\u0027 and @value eq \u0027fedramp-acronyms\u0027]]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:back-matter[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-fedramp-acronyms',
          'svrl:text':
            'A\n                FedRAMP SSP must have the FedRAMP Master Acronym and Glossary attached.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-fedramp-acronyms-diagnostic',
            content:
              'This FedRAMP SSP lacks the FedRAMP Master Acronym and Glossary.',
          },
        },
        {
          role: 'error',
          test: 'oscal:resource[oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027type\u0027 and @value eq \u0027fedramp-citations\u0027]]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:back-matter[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-fedramp-citations',
          'svrl:text':
            'A\n                FedRAMP SSP must have the FedRAMP Applicable Laws and Regulations attached.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-fedramp-citations-diagnostic',
            content:
              'This FedRAMP SSP lacks the FedRAMP Applicable Laws and Regulations.',
          },
        },
        {
          role: 'error',
          test: 'oscal:resource[oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027type\u0027 and @value eq \u0027fedramp-logo\u0027]]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:back-matter[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-fedramp-logo',
          'svrl:text':
            'A FedRAMP\n                SSP must have the FedRAMP Logo attached.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-fedramp-logo-diagnostic',
            content: 'This FedRAMP SSP lacks the FedRAMP Logo.',
          },
        },
        {
          role: 'error',
          test: 'oscal:resource[oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027type\u0027 and @value eq \u0027user-guide\u0027]]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:back-matter[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-user-guide',
          'svrl:text':
            'A FedRAMP SSP\n                must have a User Guide attached.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-user-guide-diagnostic',
            content: 'This FedRAMP SSP lacks a User Guide.',
          },
        },
        {
          role: 'error',
          test: 'oscal:resource[oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027type\u0027 and @value eq \u0027rules-of-behavior\u0027]]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:back-matter[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-rules-of-behavior',
          'svrl:text':
            'A\n                FedRAMP SSP must have Rules of Behavior.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-rules-of-behavior-diagnostic',
            content: 'This FedRAMP SSP lacks a Rules of Behavior.',
          },
        },
        {
          role: 'error',
          test: 'oscal:resource[oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027type\u0027 and @value eq \u0027information-system-contingency-plan\u0027]]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:back-matter[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-information-system-contingency-plan',
          'svrl:text': 'A FedRAMP SSP must have a Contingency Plan attached.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-information-system-contingency-plan-diagnostic',
            content: 'This FedRAMP SSP lacks a Contingency Plan.',
          },
        },
        {
          role: 'error',
          test: 'oscal:resource[oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027type\u0027 and @value eq \u0027configuration-management-plan\u0027]]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:back-matter[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-configuration-management-plan',
          'svrl:text':
            'A FedRAMP SSP must have a Configuration Management Plan attached.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-configuration-management-plan-diagnostic',
            content: 'This FedRAMP SSP lacks a Configuration Management Plan.',
          },
        },
        {
          role: 'error',
          test: 'oscal:resource[oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027type\u0027 and @value eq \u0027incident-response-plan\u0027]]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:back-matter[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-incident-response-plan',
          'svrl:text':
            'A\n                FedRAMP SSP must have an Incident Response Plan attached.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-incident-response-plan-diagnostic',
            content: 'This FedRAMP SSP lacks an Incident Response Plan.',
          },
        },
        {
          role: 'error',
          test: 'oscal:resource[oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027type\u0027 and @value eq \u0027separation-of-duties-matrix\u0027]]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:back-matter[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-separation-of-duties-matrix',
          'svrl:text':
            'A FedRAMP SSP must have a Separation of Duties Matrix attached.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-separation-of-duties-matrix-diagnostic',
            content: 'This FedRAMP SSP lacks a Separation of Duties Matrix.',
          },
        },
        {
          role: 'error',
          test: '/oscal:system-security-plan/oscal:metadata/oscal:role[@id eq \u0027privacy-poc\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:metadata[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-privacy-poc-role',
          'svrl:text':
            'A FedRAMP SSP must incorporate a Privacy Point of\n                Contact role.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-privacy-poc-role-diagnostic',
            content: 'This FedRAMP SSP lacks a Privacy Point of Contact role.',
          },
        },
        {
          role: 'error',
          test: '/oscal:system-security-plan/oscal:metadata/oscal:responsible-party[@role-id eq \u0027privacy-poc\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:metadata[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-responsible-party-privacy-poc-role',
          'svrl:text':
            'A FedRAMP SSP must declare a\n                Privacy Point of Contact responsible party role reference.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-responsible-party-privacy-poc-role-diagnostic',
            content:
              'This FedRAMP SSP lacks a Privacy Point of Contact responsible party role\n            reference.',
          },
        },
        {
          role: 'error',
          test: '/oscal:system-security-plan/oscal:metadata/oscal:responsible-party[@role-id eq \u0027privacy-poc\u0027]/oscal:party-uuid',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:metadata[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-responsible-privacy-poc-party-uuid',
          'svrl:text':
            'A FedRAMP SSP\n                must declare a Privacy Point of Contact responsible party role reference identifying the party by unique identifier.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-responsible-privacy-poc-party-uuid-diagnostic',
            content:
              'This FedRAMP SSP lacks a Privacy Point of Contact responsible party role reference\n            identifying the party by UUID.',
          },
        },
        {
          role: 'error',
          test: '/oscal:system-security-plan/oscal:metadata/oscal:party[@uuid eq $poc-uuid]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:metadata[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-privacy-poc',
          'svrl:text':
            'A FedRAMP SSP must define a Privacy Point of\n                Contact.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-privacy-poc-diagnostic',
            content: 'This FedRAMP SSP lacks a Privacy Point of Contact.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027privacy-sensitive\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-information[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-privacy-sensitive-designation',
          'svrl:text':
            'A FedRAMP SSP must have a privacy-sensitive designation.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-privacy-sensitive-designation-diagnostic',
            content: 'The privacy-sensitive designation is missing.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @class eq \u0027pta\u0027 and @name eq \u0027pta-1\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-information[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-pta-question-1',
          'svrl:text':
            'A FedRAMP SSP must have Privacy\n                Threshold Analysis (PTA)/Privacy Impact Analysis (PIA) qualifying question #1.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-pta-question-1-diagnostic',
            content:
              'The Privacy Threshold Analysis (PTA)/Privacy Impact Analysis (PIA) qualifying question #1 is\n            missing.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @class eq \u0027pta\u0027 and @name eq \u0027pta-2\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-information[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-pta-question-2',
          'svrl:text':
            'A FedRAMP SSP must have Privacy\n                Threshold Analysis (PTA)/Privacy Impact Analysis (PIA) qualifying question #2.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-pta-question-2-diagnostic',
            content:
              'The Privacy Threshold Analysis (PTA)/Privacy Impact Analysis (PIA) qualifying question #2 is\n            missing.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @class eq \u0027pta\u0027 and @name eq \u0027pta-3\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-information[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-pta-question-3',
          'svrl:text':
            'A FedRAMP SSP must have Privacy\n                Threshold Analysis (PTA)/Privacy Impact Analysis (PIA) qualifying question #3.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-pta-question-3-diagnostic',
            content:
              'The Privacy Threshold Analysis (PTA)/Privacy Impact Analysis (PIA) qualifying question #3 is\n            missing.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @class eq \u0027pta\u0027 and @name eq \u0027pta-4\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-information[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-pta-question-4',
          'svrl:text':
            'A FedRAMP SSP must have Privacy\n                Threshold Analysis (PTA)/Privacy Impact Analysis (PIA) qualifying question #4.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-pta-question-4-diagnostic',
            content:
              'The Privacy Threshold Analysis (PTA)/Privacy Impact Analysis (PIA) qualifying question #4 is\n            missing.',
          },
        },
        {
          role: 'error',
          test: 'every $name in (\u0027pta-1\u0027, \u0027pta-2\u0027, \u0027pta-3\u0027, \u0027pta-4\u0027) satisfies exists(oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @class eq \u0027pta\u0027 and @name eq $name])',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-information[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-all-pta-questions',
          'svrl:text':
            'A\n                FedRAMP SSP must have all four PTA questions.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-all-pta-questions-diagnostic',
            content: 'One or more of the four PTA questions is missing.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @class eq \u0027pta\u0027 and @name eq \u0027pta-4\u0027 and @value eq \u0027yes\u0027] and oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @class eq \u0027pta\u0027 and @name eq \u0027sorn-id\u0027 (: and @value ne \u0027\u0027:)]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-information[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-sorn',
          'svrl:text': 'A FedRAMP SSP may have a SORN ID.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-sorn-diagnostic',
            content: 'The SORN ID is missing.',
          },
        },
        {
          role: 'error',
          test: 'oscal:component[@type eq \u0027validation\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-CMVP-validation',
          'svrl:text':
            'A FedRAMP SSP must incorporate one or more FIPS 140 validated modules.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-CMVP-validation-diagnostic',
            content:
              'This FedRAMP SSP does not declare one or more FIPS 140 validated modules.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:base ne oscal:selected) then exists(oscal:adjustment-justification) else true()',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-information[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:information-type[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:confidentiality-impact[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'cia-impact-has-adjustment-justification',
          'svrl:text':
            'When SP 800-60 base and selected impacts levels differ for a given information type, the SSP must\n                include a justification for the difference.',
          'svrl:diagnostic-reference': {
            diagnostic: 'cia-impact-has-adjustment-justification-diagnostic',
            content:
              'These SP 800-60 base and selected impact levels differ, but no justification for\n            the difference is supplied.',
          },
        },
        {
          role: 'information',
          test: 'oscal:prop[@name eq \u0027identity-assurance-level\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-identity-assurance-level',
          'svrl:text':
            'A FedRAMP SSP may have a Digital Identity Determination identity assurance\n                level property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-identity-assurance-level-diagnostic',
            content:
              'A FedRAMP SSP may lack a Digital Identity Determination identity-assurance-level\n            property.',
          },
        },
        {
          role: 'information',
          test: 'oscal:prop[@name eq \u0027authenticator-assurance-level\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-authenticator-assurance-level',
          'svrl:text':
            'A FedRAMP SSP may have a Digital Identity Determination authenticator\n                assurance level property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-authenticator-assurance-level-diagnostic',
            content:
              'A FedRAMP SSP may lack a Digital Identity Determination authenticator-assurance-level\n            property.',
          },
        },
        {
          role: 'information',
          test: 'oscal:prop[@name eq \u0027federation-assurance-level\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-federation-assurance-level',
          'svrl:text':
            'A FedRAMP SSP may have a Digital Identity Determination federation assurance\n                level property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-federation-assurance-level-diagnostic',
            content:
              'A FedRAMP SSP may lack a Digital Identity Determination federation-assurance-level\n            property.',
          },
        },
        {
          role: 'error',
          test: '(: not(@uuid \u003d //oscal:inventory-item/oscal:implemented-component/@component-uuid) or :) oscal:prop[@name eq \u0027asset-type\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:component[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'component-has-asset-type',
          'svrl:text': 'A component must have an asset type.',
          'svrl:diagnostic-reference': {
            diagnostic: 'component-has-asset-type-diagnostic',
            content: 'component lacks an asset-type property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              'a9836f1e-2069-4996-aaa2-82686cac4e71 has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            'a9836f1e-2069-4996-aaa2-82686cac4e71 must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][2]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][2]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][2]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              'e0e6b53a-c8b2-42db-ae2e-e40ed1e43746 has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][2]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            'e0e6b53a-c8b2-42db-ae2e-e40ed1e43746 must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][3]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][3]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][3]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              '6e42dda9-ab8d-4b66-bf7e-bf65a548f174 has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][3]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            '6e42dda9-ab8d-4b66-bf7e-bf65a548f174 must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][4]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][4]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][4]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              '20bae7c3-232f-4756-9be8-0bdf0c61f951 has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][4]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            '20bae7c3-232f-4756-9be8-0bdf0c61f951 must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][5]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][5]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][5]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              'f36128e6-952a-4d43-82e5-96380db7c591 has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][5]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            'f36128e6-952a-4d43-82e5-96380db7c591 must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][6]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][6]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][6]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              '26c06837-8545-4702-8dee-b616aab0ac1c has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][6]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            '26c06837-8545-4702-8dee-b616aab0ac1c must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][7]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][7]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][7]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              '3cfa6896-28f6-4e25-823d-f8899b954880 has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][7]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            '3cfa6896-28f6-4e25-823d-f8899b954880 must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][8]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][8]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][8]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              '9f11c744-f917-4cec-a56b-4831fd3e10cc has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][8]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            '9f11c744-f917-4cec-a56b-4831fd3e10cc must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][9]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][9]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][9]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              '10022d51-072a-4115-bf3b-9958863404e7 has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][9]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            '10022d51-072a-4115-bf3b-9958863404e7 must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][10]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][10]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][10]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              'b8a94603-e5fb-4ee7-86ff-9f8123584449 has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][10]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            'b8a94603-e5fb-4ee7-86ff-9f8123584449 must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][11]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][11]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'not($is-software-and-database) or oscal:prop[@name eq \u0027software-version\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][11]',
          id: 'inventory-item-has-software-version',
          'svrl:text':
            '"software or database" inventory item must have a\n                software-version property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-software-version-diagnostic',
            content: 'This inventory-item lacks software-version property.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][11]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              '93a27f42-6f4e-4500-9c87-d03567c13cfe has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][11]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            '93a27f42-6f4e-4500-9c87-d03567c13cfe must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][12]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][12]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'not($is-software-and-database) or oscal:prop[@name eq \u0027software-version\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][12]',
          id: 'inventory-item-has-software-version',
          'svrl:text':
            '"software or database" inventory item must have a\n                software-version property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-software-version-diagnostic',
            content: 'This inventory-item lacks software-version property.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][12]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              '3c0081ca-7283-4072-8748-52f5fb804d7a has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][12]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            '3c0081ca-7283-4072-8748-52f5fb804d7a must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][13]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][13]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'not($is-infrastructure) or oscal:prop[(: @ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and :)@name eq \u0027hardware-model\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][13]',
          id: 'inventory-item-has-hardware-model',
          'svrl:text':
            '"infrastructure" inventory item must have a hardware-model property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-hardware-model-diagnostic',
            content: 'This inventory-item lacks a hardware-model property.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][13]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              '93ca750c-0f3a-4fde-810e-89585d46e671 has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][13]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            '93ca750c-0f3a-4fde-810e-89585d46e671 must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          role: 'information',
          test: '@value \u003d $asset-types',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][13]/*:prop[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][10]',
          id: 'has-allowed-asset-type',
          'svrl:text': 'An asset type should have an allowed value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-allowed-asset-type-diagnostic',
            content:
              'asset-type prop may have an asset type other than FedRAMP ones - this one uses "os".',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][14]',
          id: 'inventory-item-has-purpose',
          'svrl:text': 'An inventory item must have a purpose property.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-purpose-diagnostic',
            content: 'This inventory-item lacks a purpose property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027purpose\u0027 and string-length(@value) ge 20]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][14]',
          id: 'inventory-item-has-sufficient-purpose',
          'svrl:text':
            'An inventory item must have a purpose property of adequate\n                length (20 characters or more).',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-has-sufficient-purpose-diagnostic',
            content:
              'This inventory-item purpose is insufficiently described (length must be 20\n            characters or more).',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[@name eq \u0027ipv6-address\u0027]) else (true())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][14]',
          id: 'inventory-item-network-address',
          'svrl:text':
            'If any inventory-item has a prop with a name of \u0027ipv4-address\u0027 it must also have a prop with a name\n                of \u0027ipv6-address\u0027.',
          'svrl:diagnostic-reference': {
            diagnostic: 'inventory-item-network-address-diagnostic',
            content:
              '004a098e-024f-4e56-8ad7-3cc65dd950fa has an IPv4 address but does not have an IPv6 address.',
          },
        },
        {
          role: 'error',
          test: 'if (oscal:prop[@name eq \u0027ipv4-address\u0027]) then (oscal:prop[matches(@value, \u00270.0.0.0\u0027)]) else (false())',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:inventory-item[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][14]',
          id: 'ipv4-has-non-placeholder',
          'svrl:text':
            '004a098e-024f-4e56-8ad7-3cc65dd950fa must have an appropriate IPv4 value.',
          'svrl:diagnostic-reference': {
            diagnostic: 'ipv4-has-non-placeholder-diagnostic',
            content:
              'The @value content of prop whose @name is \u0027ipv4-address\u0027 has placeholder value of\n            0.0.0.0.',
          },
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??4.1',
          role: 'error',
          test: 'oscal:system-name-short',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-system-name-short',
          'svrl:text': 'A FedRAMP SSP must have a short system name.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-system-name-short-diagnostic',
            content: 'This FedRAMP SSP lacks a system-name-short.',
          },
        },
        {
          see: 'Guide to OSCAL-based FedRAMP System Security Plans ??4.2',
          role: 'error',
          test: 'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name eq \u0027authorization-type\u0027 and @value \u003d $authorization-types]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-fedramp-authorization-type',
          'svrl:text':
            'A FedRAMP\n                SSP must have an allowed FedRAMP authorization type.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-fedramp-authorization-type-diagnostic',
            content: 'This FedRAMP SSP lacks a FedRAMP authorization type.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name \u003d \u0027users-internal\u0027 and @value castable as xs:integer and @value cast as xs:integer ge 0]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-users-internal',
          'svrl:text':
            'A\n                FedRAMP SSP must specify the number of current internal users.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-users-internal-diagnostic',
            content:
              'This FedRAMP SSP does not specify the number of current internal users.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name \u003d \u0027users-external\u0027 and @value castable as xs:integer and @value cast as xs:integer ge 0]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-users-external',
          'svrl:text':
            'A\n                FedRAMP SSP must specify the number of current external users.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-users-external-diagnostic',
            content:
              'This FedRAMP SSP does not specify the number of current external users.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name \u003d \u0027users-internal-future\u0027 and @value castable as xs:integer and @value cast as xs:integer ge 0]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-users-internal-future',
          'svrl:text':
            'A\n                FedRAMP SSP must specify the number of future internal users.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-users-internal-future-diagnostic',
            content:
              'This FedRAMP SSP does not specify the number of future internal users.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027 and @name \u003d \u0027users-external-future\u0027 and @value castable as xs:integer and @value cast as xs:integer ge 0]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-users-external-future',
          'svrl:text':
            'A\n                FedRAMP SSP must specify the number of future external users.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-users-external-future-diagnostic',
            content:
              'This FedRAMP SSP does not specify the number of future external users.',
          },
        },
        {
          role: 'error',
          test: 'oscal:role[@id eq \u0027system-owner\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:metadata[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'role-defined-system-owner',
          'svrl:text': 'The System Owner role must be defined.',
          'svrl:diagnostic-reference': {
            diagnostic: 'role-defined-system-owner-diagnostic',
            content: 'The system-owner role is missing.',
          },
        },
        {
          role: 'error',
          test: 'oscal:role[@id eq \u0027authorizing-official\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:metadata[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'role-defined-authorizing-official',
          'svrl:text': 'The Authorizing Official role must be defined.',
          'svrl:diagnostic-reference': {
            diagnostic: 'role-defined-authorizing-official-diagnostic',
            content: 'The authorizing-official role is missing.',
          },
        },
        {
          role: 'error',
          test: 'oscal:role[@id eq \u0027system-poc-management\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:metadata[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'role-defined-system-poc-management',
          'svrl:text': 'The System Management PoC role must be defined.',
          'svrl:diagnostic-reference': {
            diagnostic: 'role-defined-system-poc-management-diagnostic',
            content: 'The system-poc-management role is missing.',
          },
        },
        {
          role: 'error',
          test: 'oscal:role[@id eq \u0027system-poc-technical\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:metadata[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'role-defined-system-poc-technical',
          'svrl:text': 'The System Technical PoC role must be defined.',
          'svrl:diagnostic-reference': {
            diagnostic: 'role-defined-system-poc-technical-diagnostic',
            content: 'The system-poc-technical role is missing.',
          },
        },
        {
          role: 'error',
          test: 'oscal:role[@id eq \u0027system-poc-other\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:metadata[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'role-defined-system-poc-other',
          'svrl:text': 'The System Other PoC role must be defined.',
          'svrl:diagnostic-reference': {
            diagnostic: 'role-defined-system-poc-other-diagnostic',
            content: 'The system-poc-other role is missing.',
          },
        },
        {
          role: 'error',
          test: 'oscal:role[@id eq \u0027information-system-security-officer\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:metadata[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'role-defined-information-system-security-officer',
          'svrl:text':
            'The Information System Security Officer role must be\n                defined.',
          'svrl:diagnostic-reference': {
            diagnostic:
              'role-defined-information-system-security-officer-diagnostic',
            content: 'The information-system-security-officer role is missing.',
          },
        },
        {
          role: 'error',
          test: 'oscal:role[@id eq \u0027authorizing-official-poc\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:metadata[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'role-defined-authorizing-official-poc',
          'svrl:text': 'The Authorizing Official PoC role must be defined.',
          'svrl:diagnostic-reference': {
            diagnostic: 'role-defined-authorizing-official-poc-diagnostic',
            content: 'The authorizing-official-poc role is missing.',
          },
        },
        {
          role: 'error',
          test: '//oscal:role/@id \u003d current()/@role-id',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:implemented-requirement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:responsible-role[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'responsible-role-has-role-definition',
          'svrl:text':
            'Each responsible-role must reference a role definition.',
          'svrl:diagnostic-reference': {
            diagnostic: 'responsible-role-has-role-definition-diagnostic',
            content:
              'This responsible-role references a non-existent role definition.',
          },
        },
        {
          role: 'error',
          test: '//oscal:role-id \u003d current()/@role-id',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:implemented-requirement[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:responsible-role[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'responsible-role-has-user',
          'svrl:text':
            'Each responsible-role must be referenced in a system-implementation user\n                assembly.',
          'svrl:diagnostic-reference': {
            diagnostic: 'responsible-role-has-user-diagnostic',
            content:
              'This responsible-role lacks a system-implementation user assembly.',
          },
        },
        {
          role: 'error',
          test: 'oscal:role-id',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:user[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'user-has-role-id',
          'svrl:text': 'Every user has a role identifier.',
          'svrl:diagnostic-reference': {
            diagnostic: 'user-has-role-id-diagnostic',
            content: 'This user lacks a role-id.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@ns eq \u0027https://fedramp.gov/ns/oscal\u0027][@name eq \u0027sensitivity\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:user[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'user-has-sensitivity-level',
          'svrl:text': 'Every user has a sensitivity level.',
          'svrl:diagnostic-reference': {
            diagnostic: 'user-has-sensitivity-level-diagnostic',
            content: 'This user lacks a sensitivity level property.',
          },
        },
        {
          role: 'error',
          test: 'oscal:authorized-privilege',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:user[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'user-has-authorized-privilege',
          'svrl:text': 'Every user has one or more authorized privileges.',
          'svrl:diagnostic-reference': {
            diagnostic: 'user-has-authorized-privilege-diagnostic',
            content: 'This user lacks one or more authorized-privileges.',
          },
        },
        {
          role: 'error',
          test: 'oscal:network-architecture',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-network-architecture',
          'svrl:text': 'A FedRAMP SSP includes a network architecture diagram.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-network-architecture-diagnostic',
            content:
              'This FedRAMP SSP lacks an network-architecture in its system-characteristics.',
          },
        },
        {
          role: 'error',
          test: 'oscal:data-flow',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-data-flow',
          'svrl:text': 'A FedRAMP SSP includes a data flow diagram.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-data-flow-diagnostic',
            content:
              'This FedRAMP SSP lacks an data-flow in its system-characteristics.',
          },
        },
        {
          role: 'error',
          test: 'count($missing-required-technical-controls) eq 0',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'technical-control-exists',
          'svrl:text':
            'Every required technical control is\n                implemented.',
          'svrl:diagnostic-reference': {
            diagnostic: 'technical-control-exists-diagnostic',
            content:
              'The SSP document does not contain the following implemented requirement(s) ac-2.10 ac-3 ac-5 ac-6 ac-6.1 ac-6.5 ac-6.9 ac-6.10 ac-7 ac-8 ac-10 ac-11 ac-11.1 ac-17.1 ac-17.2 ac-18.1 ac-19 ac-19.5 ac-20 ac-20.1 ac-20.2 ac-21 au-2.3 au-6 au-9.2 au-9.4 au-11 cm-5 cm-5.1 cm-10 ia-4.4 ia-5.4 ia-6 sc-7.5 sc-10.',
          },
        },
        {
          role: 'error',
          test: 'count($missing-required-automation-controls) eq 0',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:control-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'automation-control-exists',
          'svrl:text':
            'Every required automation control is\n                implemented.',
          'svrl:diagnostic-reference': {
            diagnostic: 'automation-control-exists-diagnostic',
            content:
              'The SSP document does not contain the following implemented requirement(s) ac-2.1 ac-12 au-6.1 au-7.1 ca-7 cm-2.2 cm-6.1 cm-8.3 cm-11 cp-10 ir-4.1 ir-6.1 pe-3 pe-13.2 pe-13.3 si-2.2 si-3.2 si-4.2 si-8.2.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027cloud-service-model\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-cloud-service-model',
          'svrl:text': 'A FedRAMP SSP must define a cloud service model.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-cloud-service-model-diagnostic',
            content: 'A FedRAMP SSP must specify a cloud service model.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027cloud-service-model\u0027 and @value \u003d $service-models]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-allowed-cloud-service-model',
          'svrl:text':
            'A FedRAMP SSP must define an allowed cloud service\n                model.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-allowed-cloud-service-model-diagnostic',
            content:
              'A FedRAMP SSP must specify an allowed cloud service model.',
          },
        },
        {
          role: 'warning',
          test: 'oscal:prop[@name eq \u0027cloud-service-model\u0027 and @value \u003d (\u0027saas\u0027, \u0027paas\u0027)] and ../oscal:system-implementation/oscal:leveraged-authorization',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-leveraged-authorization-with-cloud-service-model',
          'svrl:text':
            'A\n                FedRAMP SSP must define a leveraged authorization for any \u0027paas\u0027 or \u0027saas\u0027 cloud service model.',
          'svrl:diagnostic-reference': {
            diagnostic:
              'has-leveraged-authorization-with-cloud-service-model-diagnostic',
            content:
              'A FedRAMP SSP with a cloud service model of \u0027paas\u0027 or \u0027saas\u0027 must\n            specify a leveraged authorization.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027cloud-deployment-model\u0027]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-cloud-deployment-model',
          'svrl:text': 'A FedRAMP SSP must define a cloud deployment model.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-cloud-deployment-model-diagnostic',
            content: 'A FedRAMP SSP must specify a cloud deployment model.',
          },
        },
        {
          role: 'error',
          test: 'oscal:prop[@name eq \u0027cloud-deployment-model\u0027 and @value \u003d $deployment-models]',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-allowed-cloud-deployment-model',
          'svrl:text':
            'A FedRAMP SSP must define an allowed cloud\n                deployment model.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-allowed-cloud-deployment-model-diagnostic',
            content:
              'A FedRAMP SSP must specify an allowed cloud deployment model.',
          },
        },
        {
          role: 'error',
          test: '(: either there is no component or inventory-item tagged as \u0027public\u0027 :) not( exists(//oscal:component[oscal:prop[@name eq \u0027public\u0027 and @value eq \u0027yes\u0027]]) or exists(//oscal:inventory-item[oscal:prop[@name eq \u0027public\u0027 and @value eq \u0027yes\u0027]]) ) or (: a \u0027public-cloud\u0027 deployment model is employed :) exists(oscal:prop[@name eq \u0027cloud-deployment-model\u0027 and @value eq \u0027public-cloud\u0027])',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-characteristics[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-public-cloud-deployment-model',
          'svrl:text':
            'When a FedRAMP SSP has public components or inventory items, a cloud deployment model of "public-cloud" must be\n                employed.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-public-cloud-deployment-model-diagnostic',
            content:
              'When a FedRAMP SSP has public components or inventory items, a cloud deployment model of\n            "public-cloud" must be employed.',
          },
        },
        {
          role: 'information',
          test: 'every $p in $expected-network-protocols satisfies exists(//oscal:protocol[@name eq $p])',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-expected-network-protocols',
          'svrl:text': 'All expected network protocols are specified.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-expected-network-protocols-diagnostic',
            content:
              'One or more expected network protocols were not defined (within components). The expected\n            network protocols are DNS, NTP, SSH, HTTPS, TLS.',
          },
        },
        {
          role: 'information',
          test: 'exists(oscal:component[@type eq \u0027DNS-authoritative-service\u0027])',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]/*:system-implementation[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'has-DNS-authoritative-service',
          'svrl:text': 'A DNS authoritative service is defined.',
          'svrl:diagnostic-reference': {
            diagnostic: 'has-DNS-authoritative-service-diagnostic',
            content: 'No DNS authoritative service is specified in the SSP.',
          },
        },
      ],
      'xmlns:iso': 'http://purl.oclc.org/dsdl/schematron',
      'svrl:successful-report': [
        {
          role: 'information',
          test: 'true()',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'info-system-name',
          'svrl:text': 'AwesomeCloud',
        },
        {
          role: 'information',
          test: 'true()',
          location:
            '/*:system-security-plan[namespace-uri()\u003d\u0027http://csrc.nist.gov/ns/oscal/1.0\u0027][1]',
          id: 'info-ssp-title',
          'svrl:text': 'AwesomeCloud SSP',
        },
      ],
      'xmlns:fedramp': 'https://fedramp.gov/ns/oscal',
    },
  };

  const annotations = useMemo<Annotation[]>(() => {
    const svrlFailedAssertions = getSVRLFailedAssertions(svrl);
    if (!svrlFailedAssertions) return [];
    return svrlFailedAssertions.map((svrlFailedAssertion, index) => {
      return {
        uniqueId: `${svrlFailedAssertion.id}-${index}`,
        xpath: svrlFailedAssertion.location,
      };
    });
  }, [svrl]);

  const fileString = `<?xml version="1.0" encoding="UTF-8"?>
  <system-security-plan xmlns:m="http://csrc.nist.gov/ns/oscal/metaschema/1.0"
      xmlns="http://csrc.nist.gov/ns/oscal/1.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://csrc.nist.gov/ns/oscal/1.0 https://raw.githubusercontent.com/usnistgov/OSCAL/main/xml/schema/oscal_ssp_schema.xsd" uuid="993cbf3c-3e67-4f3f-94c8-535fef442346">
      <metadata>
          <title>AwesomeCloud SSP</title>
          <last-modified>2023-01-12T10:33:05.579569700-05:00</last-modified>
          <version>1.0</version>
          <oscal-version>1.0.4</oscal-version>
      </metadata>
      <import-profile href="FedRAMP_rev4_MODERATE-baseline_profile.xml"/>    
      <system-characteristics>
          <system-id identifier-type="https://fedramp.gov">F00000001</system-id>
          <system-id>F00000001</system-id>
          <system-name>AwesomeCloud</system-name>
          <description>
              <p>AwesomeCloud hosts a public facing web application that collects surveys from consumers on their favorite condiments. Based on responses to surveys the AwesomeCloud proprietary algorithm assigns a score to each condiment and determines whether a condiment earns the endorsement of Awesome Sauce. The scores are updated dynamically as new surveys are submitted and the scores and Awesome Sauce endorsements are posted to the AwesomeCloud public web page.
              </p>
          </description>
          <security-sensitivity-level>fips-199-moderate</security-sensitivity-level>
          <system-information>
              <information-type uuid="a955e21e-2050-420a-914e-8424132b9342">
                  <title> Research and Developemnt</title>
                  <description>
                      <p>Research and Development involves the gathering and analysis of data, dissemination of results, and development of new products, methodologies, and ideas. The sensitivity and criticality of most research and development information depends on the subject matter involved.</p>
                  </description>
                  <categorization system="https://doi.org/10.6028/NIST.SP.800-60v2r1">
                      <information-type-id>D.20.1</information-type-id>
                  </categorization>
                  <confidentiality-impact>
                      <base>fips-199-low</base>
                      <selected>fips-199-moderate</selected>
                  </confidentiality-impact>
                  <integrity-impact>
                      <base>fips-199-moderate</base>
                      <selected>fips-199-moderate</selected>
                  </integrity-impact>
                  <availability-impact>
                      <base>fips-199-low</base>
                      <selected>fips-199-low</selected>
                  </availability-impact>
              </information-type>         
          </system-information>
          <security-impact-level>
              <security-objective-confidentiality>fips-199-moderate</security-objective-confidentiality>
              <security-objective-integrity>fips-199-moderate</security-objective-integrity>
              <security-objective-availability>fips-199-low</security-objective-availability>
          </security-impact-level>
          <status state="operational"/>        
          <authorization-boundary>
              <description/>            
              <diagram uuid="16ebbf5d-b2ca-4447-9ea0-da9ef5a9a1a1">
                  <description></description>
                  <link href="#51cbc2c8-7eb8-4ab1-a9fc-5a742508c968" rel="diagram"/>
                  <caption/>
              </diagram>
          </authorization-boundary>
      </system-characteristics>
      <system-implementation>
          <user uuid="c81c9e24-aa12-48dd-8518-ba266d014250">
              <prop name="type" value="internal"/>
              <prop name="privilege-level" value="privileged"/>
          </user>        
          <component uuid="f6203cd1-22da-4702-a054-739d168777fe" type="this-system">
              <title>Awesome Cloud</title>
              <description>
                  <p>AwesomeCloud Software as a Service Solution</p>
              </description>
              <status state="operational"/>            
          </component>
          <inventory-item uuid="a9836f1e-2069-4996-aaa2-82686cac4e71">
              <description>
                  <p>Microsoft Azure Traffic Manager</p>
              </description>
              <prop name="asset-id" value="a9836f1e-2069-4996-aaa2-82686cac4e71"/>
              <prop name="ipv4-address" value="35.140.50.0"/>
              <prop name="virtual" value="yes"/>
              <prop name="public" value="yes"/>
              <prop name="fqdn" value="AwesomeCloud.com"/>
              <prop name="netbios-name" value="TM01"/>
              <prop name="mac-address" value="AC-10-F0-39-27-04"/>
              <prop name="asset-type" value="firewall"/>
              <prop name="vendor-name" value="Microsoft"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="infrastructure"/>
              <prop name="allows-authenticated-scan" value="no">
                  <remarks>
                  <p>This is an appliance.</p>
                  </remarks>
              </prop>
              <prop name="baseline-configuration-name" value="TM_Config_01"/>
              <prop name="is-scanned" value="no">
                  <remarks>
                  <p>This is an appliance.</p>
                  </remarks>
              </prop>
              <prop name="function" value="Traffic Manager"/>
          </inventory-item>
          <inventory-item uuid="e0e6b53a-c8b2-42db-ae2e-e40ed1e43746">
              <description>
                  <p>Citrix NetScaler SDX</p>
              </description>
              <prop name="asset-id" value="e0e6b53a-c8b2-42db-ae2e-e40ed1e43746"/>
              <prop name="ipv4-address" value="192.168.100.5"/>
              <prop name="virtual" value="no"/>
              <prop name="public" value="no"/>
              <prop name="fqdn" value="NS01.AwesomeCloud.local"/>
              <prop name="netbios-name" value="NS01"/>
              <prop name="mac-address" value="AC-2D-AF-2B-3F-79"/>
              <prop name="asset-type" value="router"/>
              <prop name="vendor-name" value="Citrix"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="infrastructure"/>
              <prop name="allows-authenticated-scan" value="no">
                  <remarks>
                  <p>This is an appliance.</p>
                  </remarks>
              </prop>
              <prop name="baseline-configuration-name" value="NS_Config_01"/>
              <prop name="is-scanned" value="no">
                  <remarks>
                  <p>This is an appliance.</p>
                  </remarks>
              </prop>
              <prop name="function" value="Load Balancer"/>
          </inventory-item>
          <inventory-item uuid="6e42dda9-ab8d-4b66-bf7e-bf65a548f174">
              <description>
                  <p>Citrix NetScaler SDX</p>
              </description>
              <prop name="asset-id" value="6e42dda9-ab8d-4b66-bf7e-bf65a548f174"/>
              <prop name="ipv4-address" value="192.168.100.6"/>
              <prop name="virtual" value="no"/>
              <prop name="public" value="no"/>
              <prop name="fqdn" value="NS02.AwesomeCloud.local"/>
              <prop name="netbios-name" value="NS02"/>
              <prop name="mac-address" value="AC-C4-82-FD-F0-B0"/>
              <prop name="asset-type" value="router"/>
              <prop name="vendor-name" value="Citrix"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="infrastructure"/>
              <prop name="allows-authenticated-scan" value="no">
                  <remarks>
                  <p>This is an appliance.</p>
                  </remarks>
              </prop>
              <prop name="baseline-configuration-name" value="NS_Config_01"/>
              <prop name="is-scanned" value="no">
                  <remarks>
                  <p>This is an appliance.</p>
                  </remarks>
              </prop>
              <prop name="function" value="Load Balancer"/>
          </inventory-item>
          <inventory-item uuid="20bae7c3-232f-4756-9be8-0bdf0c61f951">
              <description>
                  <p>Microsoft IIS 10 Web Server</p>
              </description>
              <prop name="asset-id" value="20bae7c3-232f-4756-9be8-0bdf0c61f951"/>
              <prop name="ipv4-address" value="192.168.100.100"/>
              <prop name="virtual" value="yes"/>
              <prop name="public" value="no"/>
              <prop name="fqdn" value="WEB01.AwesomeCloud.local"/>
              <prop name="netbios-name" value="WEB01"/>
              <prop name="mac-address" value="AC-FD-6F-0D-16-1D"/>
              <prop name="software-name" value="Windows Server Datacenter"/>
              <prop name="version" value="2019"/>
              <prop name="asset-type" value="web-server"/>
              <prop name="vendor-name" value="Microsoft"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="web"/>
              <prop name="allows-authenticated-scan" value="yes"/>
              <prop name="baseline-configuration-name" value="Web_Server_Config"/>
              <prop name="is-scanned" value="yes"/>
              <prop name="function" value="Web Server"/>
          </inventory-item>
          <inventory-item uuid="f36128e6-952a-4d43-82e5-96380db7c591">
              <description>
                  <p>Microsoft IIS 10 Web Server</p>
              </description>
              <prop name="asset-id" value="f36128e6-952a-4d43-82e5-96380db7c591"/>
              <prop name="ipv4-address" value="192.168.100.101"/>
              <prop name="virtual" value="yes"/>
              <prop name="public" value="no"/>
              <prop name="fqdn" value="WEB02.AwesomeCloud.local"/>
              <prop name="netbios-name" value="WEB02"/>
              <prop name="mac-address" value="AC-8E-2B-2C-C2-CA"/>
              <prop name="software-name" value="Windows Server Datacenter"/>
              <prop name="version" value="2019"/>
              <prop name="asset-type" value="web-server"/>
              <prop name="vendor-name" value="Microsoft"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="web"/>
              <prop name="allows-authenticated-scan" value="yes"/>
              <prop name="baseline-configuration-name" value="Web_Server_Config"/>
              <prop name="is-scanned" value="yes"/>
              <prop name="function" value="Web Server"/>
          </inventory-item>
          <inventory-item uuid="26c06837-8545-4702-8dee-b616aab0ac1c">
              <description>
                  <p>Apache 2.4 Web Server</p>
              </description>
              <prop name="asset-id" value="26c06837-8545-4702-8dee-b616aab0ac1c"/>
              <prop name="ipv4-address" value="192.168.100.150"/>
              <prop name="virtual" value="yes"/>
              <prop name="public" value="no"/>
              <prop name="fqdn" value="WEBAPI01.AwesomeCloud.local"/>
              <prop name="netbios-name" value="WEBAPI01"/>
              <prop name="mac-address" value="AC-F0-F1-22-5D-1E"/>
              <prop name="software-name" value="RHEL"/>
              <prop name="version" value="7"/>
              <prop name="asset-type" value="web-server"/>
              <prop name="vendor-name" value="RedHat"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="web"/>
              <prop name="allows-authenticated-scan" value="yes"/>
              <prop name="baseline-configuration-name" value="Web_Server_Config_2"/>
              <prop name="is-scanned" value="yes"/>
              <prop name="function" value="Web Server"/>
          </inventory-item>
          <inventory-item uuid="3cfa6896-28f6-4e25-823d-f8899b954880">
              <description>
                  <p>Citrix NetScaler SDX</p>
              </description>
              <prop name="asset-id" value="3cfa6896-28f6-4e25-823d-f8899b954880"/>
              <prop name="ipv4-address" value="192.168.100.7"/>
              <prop name="virtual" value="no"/>
              <prop name="public" value="no"/>
              <prop name="fqdn" value="NS03.AwesomeCloud.local"/>
              <prop name="netbios-name" value="NS03"/>
              <prop name="mac-address" value="AC-2B-50-FD-21-D1"/>
              <prop name="asset-type" value="router"/>
              <prop name="vendor-name" value="Citrix"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="infrastructure"/>
              <prop name="allows-authenticated-scan" value="no">
                  <remarks>
                  <p>This is an appliance.</p>
                  </remarks>
              </prop>
              <prop name="baseline-configuration-name" value="NS_Config_02"/>
              <prop name="is-scanned" value="no">
                  <remarks>
                  <p>This is an appliance.</p>
                  </remarks>
              </prop>
              <prop name="function" value="Load Balancer"/>
          </inventory-item>
          <inventory-item uuid="9f11c744-f917-4cec-a56b-4831fd3e10cc">
              <description>
                  <p>Application Server hosting Splunk Enterprise Edition 9</p>
              </description>
              <prop name="asset-id" value="9f11c744-f917-4cec-a56b-4831fd3e10cc"/>
              <prop name="ipv4-address" value="192.168.101.102"/>
              <prop name="virtual" value="yes"/>
              <prop name="public" value="no"/>
              <prop name="fqdn" value="SPLUNK01.AwesomeCloud.local"/>
              <prop name="netbios-name" value="SPLUNK01"/>
              <prop name="mac-address" value="AC-CE-BE-B4-25-62"/>
              <prop name="software-name" value="CentOs"/>
              <prop name="version" value="13.1"/>
              <prop name="asset-type" value="web-server"/>
              <prop name="vendor-name" value="CentOs"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="infrastructure"/>
              <prop name="allows-authenticated-scan" value="yes"/>
              <prop name="baseline-configuration-name" value="App_Server_Config"/>
              <prop name="is-scanned" value="yes"/>
              <prop name="function" value="Log Aggregation Server"/>
          </inventory-item>
          <inventory-item uuid="10022d51-072a-4115-bf3b-9958863404e7">
              <description>
                  <p>Microsoft Windows Server 2019 Datacenter File Server</p>
              </description>
              <prop name="asset-id" value="10022d51-072a-4115-bf3b-9958863404e7"/>
              <prop name="ipv4-address" value="192.168.101.103"/>
              <prop name="virtual" value="yes"/>
              <prop name="public" value="no"/>
              <prop name="fqdn" value="FS01.AwesomeCloud.local"/>
              <prop name="netbios-name" value="FS01"/>
              <prop name="mac-address" value="AC-7B-E8-53-FA-2B"/>
              <prop name="software-name" value="Windows Server Datacenter"/>
              <prop name="version" value="2019"/>
              <prop name="asset-type" value="storage-array"/>
              <prop name="vendor-name" value="Microsoft"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="infrastructure"/>
              <prop name="allows-authenticated-scan" value="yes"/>
              <prop name="baseline-configuration-name" value="File_Server_Config"/>
              <prop name="is-scanned" value="yes"/>
              <prop name="function" value="File Server"/>
          </inventory-item>
          <inventory-item uuid="b8a94603-e5fb-4ee7-86ff-9f8123584449">
              <description>
                  <p>RHEL Application Server hosting REST APIs</p>
              </description>
              <prop name="asset-id" value="b8a94603-e5fb-4ee7-86ff-9f8123584449"/>
              <prop name="ipv4-address" value="192.168.101.104"/>
              <prop name="virtual" value="yes"/>
              <prop name="public" value="no"/>
              <prop name="fqdn" value="APP01.AwesomeCloud.local"/>
              <prop name="netbios-name" value="APP01"/>
              <prop name="mac-address" value="AC-BD-C7-70-DA-4F"/>
              <prop name="software-name" value="RHEL"/>
              <prop name="version" value="7"/>
              <prop name="asset-type" value="web-server"/>
              <prop name="vendor-name" value="RedHat"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="infrastructure"/>
              <prop name="allows-authenticated-scan" value="yes"/>
              <prop name="baseline-configuration-name" value="APP_Server_Config"/>
              <prop name="is-scanned" value="yes"/>
              <prop name="function" value="REST API Server"/>
          </inventory-item>
          <inventory-item uuid="93a27f42-6f4e-4500-9c87-d03567c13cfe">
              <description>
                  <p>Ubuntu Database Server</p>
              </description>
              <prop name="asset-id" value="93a27f42-6f4e-4500-9c87-d03567c13cfe"/>
              <prop name="ipv4-address" value="192.168.102.101"/>
              <prop name="virtual" value="yes"/>
              <prop name="public" value="no"/>
              <prop name="fqdn" value="DB01.AwesomeCloud.local"/>
              <prop name="netbios-name" value="DB01"/>
              <prop name="mac-address" value="AC-E8-FF-A0-B6-61"/>
              <prop name="software-name" value="Ubuntu"/>
              <prop name="version" value="22.04"/>
              <prop name="asset-type" value="database"/>
              <prop name="vendor-name" value="Ubuntu"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="database"/>
              <prop name="allows-authenticated-scan" value="yes"/>
              <prop name="baseline-configuration-name" value="DB_Server_Config"/>
              <prop name="is-scanned" value="yes"/>
              <prop name="function" value="Database Server"/>
          </inventory-item>
          <inventory-item uuid="3c0081ca-7283-4072-8748-52f5fb804d7a">
              <description>
                  <p>Ubuntu Database Server</p>
              </description>
              <prop name="asset-id" value="3c0081ca-7283-4072-8748-52f5fb804d7a"/>
              <prop name="ipv4-address" value="192.168.102.102"/>
              <prop name="virtual" value="yes"/>
              <prop name="public" value="no"/>
              <prop name="fqdn" value="DB02.AwesomeCloud.local"/>
              <prop name="netbios-name" value="DB02"/>
              <prop name="mac-address" value="AC-8E-2C-B0-DB-2E"/>
              <prop name="software-name" value="Ubuntu"/>
              <prop name="version" value="22.04"/>
              <prop name="asset-type" value="database"/>
              <prop name="vendor-name" value="Ubuntu"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="database"/>
              <prop name="allows-authenticated-scan" value="yes"/>
              <prop name="baseline-configuration-name" value="DB_Server_Config"/>
              <prop name="is-scanned" value="yes"/>
              <prop name="function" value="Database Server"/>
          </inventory-item>
          <inventory-item uuid="93ca750c-0f3a-4fde-810e-89585d46e671">
              <description>
                  <p>Jump box for administrator access to AwesomeCloud network</p>
              </description>
              <prop name="asset-id" value="93ca750c-0f3a-4fde-810e-89585d46e671"/>
              <prop name="ipv4-address" value="35.140.50.30"/>
              <prop name="virtual" value="yes"/>
              <prop name="public" value="yes"/>
              <prop name="fqdn" value="JUMP01.AwesomeCloud.local"/>
              <prop name="netbios-name" value="JUMP01"/>
              <prop name="mac-address" value="AC-65-CA-E2-53-66"/>
              <prop name="software-name" value="Windows"/>
              <prop name="version" value="11"/>
              <prop name="asset-type" value="os"/>
              <prop name="vendor-name" value="Microsoft"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="infrastructure"/>
              <prop name="allows-authenticated-scan" value="yes"/>
              <prop name="baseline-configuration-name" value="DB_Server_Config"/>
              <prop name="is-scanned" value="yes"/>
              <prop name="function" value="Jump box for Admin"/>
          </inventory-item>
          <inventory-item uuid="004a098e-024f-4e56-8ad7-3cc65dd950fa">
              <description>
                  <p>LDAP Active Directory Server</p>
              </description>
              <prop name="asset-id" value="004a098e-024f-4e56-8ad7-3cc65dd950fa"/>
              <prop name="ipv4-address" value="192.168.100.9"/>
              <prop name="virtual" value="yes"/>
              <prop name="public" value="no"/>
              <prop name="fqdn" value="AD01.AwesomeCloud.local"/>
              <prop name="netbios-name" value="AD01"/>
              <prop name="mac-address" value="AC-F5-7C-49-94-B4"/>
              <prop name="software-name" value="Server 2019 Datacenter"/>
              <prop name="version" value="2019"/>
              <prop name="asset-type" value="directory-server"/>
              <prop name="vendor-name" value="Microsoft"/>
              <prop ns="https://fedramp.gov/ns/oscal" name="scan-type" value="infrastructure"/>
              <prop name="allows-authenticated-scan" value="yes"/>
              <prop name="baseline-configuration-name" value="DB_Server_Config"/>
              <prop name="is-scanned" value="yes"/>
              <prop name="function" value="Jump box for Admin"/>
          </inventory-item>
      </system-implementation>
      <control-implementation>
          <description/>        
          <implemented-requirement control-id="cm-8" uuid="41af2ac0-5e22-488d-a052-549a46ad181d">
              <!-- Control title: Information System Component Inventory -->
              <prop name="control-origination" ns="https://fedramp.gov/ns/oscal" value="sp-system"/>
              <prop name="implementation-status" ns="https://fedramp.gov/ns/oscal" value="implemented"/>            
              <set-parameter param-id="cm-8_prm_1">
                  <value>the information contained in the FedRAMP Integrated Inventory Workbook Template</value>
              </set-parameter>
              <set-parameter param-id="cm-8_prm_2">
                  <value>at least monthly</value>
                  <remarks>
                      <p>There is a FedRAMP constraint on this ODP: <q>at least monthly</q></p>
                  </remarks>
              </set-parameter>
              <responsible-role role-id="implemented-requirement-responsible-role"/>
              <!-- Required response points are: cm-8_smt.a, cm-8_smt.b, cm-8.1_smt, cm-8.3_smt.a, cm-8.3_smt.b, cm-8.5_smt-->
              <statement statement-id="cm-8_smt" uuid="58b818b2-f282-4a7b-bc67-9cedc94fff57">
                  <by-component component-uuid="19a38c5f-e4af-494b-a482-acf22c28a448" uuid="67795913-5256-49af-9275-fbd4c3db0960">
                      <description>
                          <p>AwesomeCloud</p>
                      </description>
                  </by-component>
              </statement>
              <statement statement-id="cm-8_smt.a" uuid="256453ac-da24-47fd-8693-047ee68610c6">
                  <by-component component-uuid="19a38c5f-e4af-494b-a482-acf22c28a448" uuid="67795913-5256-49af-9275-fbd4c3db0960">
                      <description>
                          <p>AwesomeCloud maintains the information system inventory to include the data elements outlined in the FedRAMP Integrated Inventory Workbook Template. Information system inventory items are documented within the AwesomeCloud System Security Plan (SSP). Monthly, the AwesomeCloud SSP is exported to OSCAL and submitted to the FedRAMP ConMon Web Service.</p>
                      </description>
                  </by-component>
              </statement>
              <statement statement-id="cm-8_smt.a.1" uuid="059e9814-d41f-4847-8d3e-001419fb0650">
                  <by-component component-uuid="19a38c5f-e4af-494b-a482-acf22c28a448" uuid="67795913-5256-49af-9275-fbd4c3db0960">
                      <description>
                          <p>The inventory: Accurately reflects the current information system, by documenting all of the mandatory fields contained within the FedRAMP Integrated Inventory Workbook Template</p>
                      </description>
                  </by-component>
              </statement>
              <statement statement-id="cm-8_smt.a.2" uuid="89fa36e9-5432-41fa-a532-dbf252b5aa52">
                  <by-component component-uuid="19a38c5f-e4af-494b-a482-acf22c28a448" uuid="67795913-5256-49af-9275-fbd4c3db0960">
                      <description>
                          <p>AwesomeCloud ensures that the inventory includes all components within the authorization boundary of the information system by reconciling the inventory with discovery scans performed by the vulnerability management tool (i.e. Tenable Nessus)</p>
                      </description>
                  </by-component>
              </statement>
              <statement statement-id="cm-8_smt.a.3" uuid="aafa3cd2-7c12-4a73-85bb-ad5fcf94c9c1">
                  <by-component component-uuid="19a38c5f-e4af-494b-a482-acf22c28a448" uuid="67795913-5256-49af-9275-fbd4c3db0960">
                      <description>
                          <p>AwesomeCloud ensures that the inventory is at the level of granularity deemed necessary for tracking and reporting, by capturing all of the required fields identified in the FedRAMP Integrated Inventory Workbook Template.</p>
                      </description>
                  </by-component>
              </statement>
              <statement statement-id="cm-8_smt.a.4" uuid="03e00899-39ee-41f0-8e3c-5b5791b67e88">
                  <by-component component-uuid="19a38c5f-e4af-494b-a482-acf22c28a448" uuid="67795913-5256-49af-9275-fbd4c3db0960">
                      <description>
                          <p>Awesome ensure that the inventory contains the fields outlined within the FedRAMP Integrated Inventory Workbook Template.</p>
                      </description>
                  </by-component>
              </statement>
              <statement statement-id="cm-8_smt.b" uuid="e918de9b-a205-4e14-b256-4fe850fa5f61">
                  <by-component component-uuid="19a38c5f-e4af-494b-a482-acf22c28a448" uuid="67795913-5256-49af-9275-fbd4c3db0960">
                      <description>
                          <p>Monthly, AwesomeCloud performs discovery scans using the vulnerability management tool (i.e. Tenable Nessus) and reconciles the inventory items from the discovery scan with the official inventory maintained within the AwesomeCloud GRC tool. The inventory is updated within the GRC tool to reflect the current state of the AwesomeCloud system.</p>
                      </description>
                  </by-component>
              </statement>
              <statement statement-id="cm-8_fr_smt.1" uuid="75a78c4c-efaf-4317-901a-0f315ea01016">
                  <by-component component-uuid="19a38c5f-e4af-494b-a482-acf22c28a448" uuid="67795913-5256-49af-9275-fbd4c3db0960">
                      <description>
                          <p>Monthly, the AwesomeCloud ISSO exports the SSP containing the inventory items to OSCAL and submits it to the FedRAMP using the FedRAMP Web Services API.</p>
                      </description>
                  </by-component>
              </statement>
          </implemented-requirement>        
      </control-implementation>
      <back-matter>
          <!--Authorization Boundary Diagram-->
          <resource uuid="51cbc2c8-7eb8-4ab1-a9fc-5a742508c968">
              <title>Authorization Boundary Diagram</title>
              <description/>
              <prop name="type" value="diagram"/>
              <rlink href="AwesomeCloudHLA1.png"/>            
          </resource>
      </back-matter>
  </system-security-plan>  
  `;
  
  const { html, prev, next, activeIndex, annotation, activateAnnotation } =
    useAnnotations({
      fileString,
      annotations,
      SaxonJS,
    });
  console.log('activeIndex', activeIndex);
  console.log('annotation', annotation);
  return (
    <React.Fragment>
      <FileViewer language="xml" html={html} />
      <SpaceBetween direction="horizontal" size="sm">
        <Button text="prev" onClick={prev} />
        <Button text="next" onClick={next} />
      </SpaceBetween>
    </React.Fragment>
  );
};

Default.args = {};
