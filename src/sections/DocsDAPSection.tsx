import React from 'react';
import { Database, Zap, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';

export const DocsDAPSection: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Page Title */}
      <div className="not-prose mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Data Accessibility Probing (DAP)
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Finality from accessibility — shift from "someone posted data" to "the network can retrieve it now."
        </p>
      </div>

      {/* Connection to Previous Section */}
      <div className="not-prose bg-teal-50 border border-teal-200 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-3">
          <ArrowRight className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-teal-900 mb-1">From Payments to Data Finality</h3>
            <p className="text-sm text-teal-800">
              While Hydra ensures payment atomicity, DAP ensures that the underlying data for those transactions remains accessible to the entire network, providing the foundation for verifiable settlement.
            </p>
          </div>
        </div>
      </div>

      <h2>The Data Availability Gap</h2>

      <p>
        Legacy data availability systems create a dangerous disconnect between attestation and reality. 
        Committees attest to "availability" even when end-users cannot actually fetch the data, leading 
        to finalized but inaccessible state that breaks the fundamental promise of blockchain transparency.
      </p>

      <p>
        DAP represents a paradigm shift from traditional data availability to verifiable data accessibility. 
        Instead of validators attesting that "someone posted data," the network only finalizes blobs that 
        it can actually retrieve right now, during the finalization process itself.
      </p>

      <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h3 className="text-sm font-semibold text-red-900">Legacy DA Problems</h3>
          </div>
          <ul className="text-sm text-red-800 space-y-1">
            <li>• Committees attest without actual retrieval</li>
            <li>• End-users cannot fetch finalized data</li>
            <li>• Gap between attestation and reality</li>
            <li>• Silent failures and false finalization</li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h3 className="text-sm font-semibold text-green-900">DAP Solution</h3>
          </div>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Only finalize accessible data</li>
            <li>• Anonymous validator probes verify retrieval</li>
            <li>• Fail-closed safety: no data = no finality</li>
            <li>• Service-coupled finality guarantees</li>
          </ul>
        </div>
      </div>

      <h2>How DAP Works</h2>

      <p>
        The mechanism operates through a short probing window where validators issue anonymous, paid probes 
        via the relay network. A blob achieves finality only when enough probes successfully return valid 
        data openings, proving the network can access the data when needed.
      </p>

      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-900">DAP Finalization Process</h4>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 w-48 text-center">
                <Database className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-blue-900">1. Blob Submission</div>
                <div className="text-xs text-blue-700 mt-1">Data posted to relay network</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 w-48 text-center">
                <Zap className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-orange-900">2. Probe Window</div>
                <div className="text-xs text-orange-700 mt-1">Anonymous validator probes</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="bg-green-100 border border-green-300 rounded-lg p-4 w-48 text-center">
                <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-green-900">3. Finality Gate</div>
                <div className="text-xs text-green-700 mt-1">Accessible data finalizes</div>
              </div>
            </div>
          </div>
          
          <figcaption className="text-sm text-gray-600 text-center mt-4">
            <strong>Figure 1:</strong> DAP three-step process ensures only accessible data achieves finality.
          </figcaption>
        </figure>
      </div>

      <h2>Key Properties</h2>

      <h3>Fail-Closed Safety</h3>
      <p>
        If data isn't reachable during the probe window, it simply doesn't finalize — no silent failures 
        or false attestations. This "fail-closed" behavior ensures that finality always implies accessibility, 
        eliminating the trust gap in traditional DA systems.
      </p>

      <h3>No Per-Shard DA Subnets</h3>
      <p>
        DAP eliminates the need for per-shard data availability committees, removing adaptive corruption 
        vulnerabilities and coordination overhead that plague traditional sharded systems. The entire 
        network participates in accessibility verification.
      </p>

      <h3>Predictable Pricing</h3>
      <p>
        Fees are blob-size-independent and inversely proportional to chosen latency. Users can select 
        their finality speed: shorter probe windows cost more but finalize faster, while longer windows 
        provide cheaper settlement for non-urgent data.
      </p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Window Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Use Case
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Example Cost
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Latency
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                10 seconds
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Urgent agent decisions
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $0.01
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ~15s total
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                60 seconds
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Normal transactions
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $0.001
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ~90s total
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                300 seconds
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Batch operations
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $0.0001
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ~6min total
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Internet-Scale DA Economics</h2>

      <p>
        DAP's fee model enables internet-scale data availability at predictable prices. Validator cost 
        scales approximately with per-probe overhead, while user fees remain independent of blob size. 
        This creates a sustainable economic model where congestion becomes priced latency rather than 
        silent failure.
      </p>

      <p>
        The economic structure naturally balances network load: users requiring faster finality pay 
        premium prices for shorter probe windows, while batch operations can choose longer, cheaper 
        windows. This creates efficient price discovery without sacrificing accessibility guarantees.
      </p>

      <h2>Responsibility Split</h2>

      <p>
        DAP establishes a clear division of responsibilities between the probing phase and post-finality 
        data distribution. During the probe window, data providers must serve validator requests to 
        achieve finality. After finalization, full nodes and agents can download the now-accessible 
        data with confidence in its availability.
      </p>

      <ul>
        <li><strong>Probe Window:</strong> Validators gate admission through accessibility verification</li>
        <li><strong>Post-Finality:</strong> Network-wide distribution of verified, accessible data</li>
        <li><strong>Agent Access:</strong> Guaranteed retrieval of finalized information</li>
        <li><strong>Economic Incentives:</strong> Service quality directly impacts finalization success</li>
      </ul>

      <h2>Example: Model Checkpoint Finalization</h2>

      <p>
        Consider an AI agent publishing a large model checkpoint blob. Under DAP, the checkpoint is 
        submitted to the relay network and enters a chosen probe window (e.g., 60 seconds for normal 
        priority). Validators anonymously probe the checkpoint during this window. Only if enough probes 
        successfully retrieve valid openings does the checkpoint achieve finality. Once finalized, other 
        agents can confidently download and use the checkpoint, knowing the network has verified its 
        accessibility.
      </p>

      <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <div className="flex items-start gap-4">
          <ArrowRight className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Next: Hyper-Sharded Nanochains</h3>
            <p className="text-blue-800 mb-4">
              Learn how stateless shards leverage DAP-verified data to provide linear scaling 
              through verifier-only execution and rapid leader rotation.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Continue to Nanochains →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};