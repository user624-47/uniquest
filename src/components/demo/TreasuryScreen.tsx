import React, { useState } from 'react';
import { BottomNavigation } from './marketplace/BottomNavigation';
import { Eye, EyeOff } from 'lucide-react';
import TransferModal from './treasury/TransferModal';
import WithdrawalModal from './treasury/WithdrawalModal';
import TopUpModal from './treasury/TopUpModal';

const TreasuryScreen = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [isWithdrawalOpen, setIsWithdrawalOpen] = useState(false);
  const [isTopUpOpen, setIsTopUpOpen] = useState(false);

  return (
    <div className="min-h-screen bg-uniquest-dark text-white pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Wallet</h1>
        
        {/* Balance Card */}
        <div className="bg-uniquest-gray rounded-2xl p-4 mb-6 relative">
          <div className="flex justify-between items-start mb-2">
            <img 
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736521431/brown_wallet_turned_left_mne4dz.png"
              alt="Wallet"
              className="w-8 h-8"
            />
            <img 
              src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736521603/green_money_bill_r8ztpm.png"
              alt="Money"
              className="w-8 h-8"
            />
          </div>
          
          <div className="mb-4">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <span>Balance</span>
              <button 
                onClick={() => setShowBalance(!showBalance)}
                className="focus:outline-none"
              >
                {showBalance ? (
                  <Eye className="w-4 h-4" />
                ) : (
                  <EyeOff className="w-4 h-4" />
                )}
              </button>
            </div>
            <h2 className="text-3xl font-bold">
              {showBalance ? '₦200,000.00' : '••••••••'}
            </h2>
          </div>
          
          <div className="flex justify-between gap-2">
            <button 
              className="flex items-center justify-center gap-2 bg-uniquest-gray-light rounded-xl py-2 px-4 flex-1"
              onClick={() => setIsTopUpOpen(true)}
            >
              <img 
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736521647/plus_taf3el.png"
                alt="Top Up"
                className="w-4 h-4"
              />
              <span className="text-sm text-green-500">Top Wallet</span>
            </button>
            <button 
              className="flex items-center justify-center gap-2 bg-uniquest-gray-light rounded-xl py-2 px-4 flex-1"
              onClick={() => setIsTransferOpen(true)}
            >
              <img 
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736521670/paper_plane_j6rczt.png"
                alt="Transfer"
                className="w-4 h-4"
              />
              <span className="text-sm text-blue-500">Transfer</span>
            </button>
            <button 
              className="flex items-center justify-center gap-2 bg-uniquest-gray-light rounded-xl py-2 px-4 flex-1"
              onClick={() => setIsWithdrawalOpen(true)}
            >
              <img 
                src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736521397/pack_of_banknotes_sp35vb.png"
                alt="Withdrawal"
                className="w-4 h-4"
              />
              <span className="text-sm text-amber-500">Withdrawal</span>
            </button>
          </div>
        </div>
        
        {/* Transactions */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Recent Transaction</h3>
            <button className="text-blue-500 text-sm">See All</button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-gray-400 text-sm mb-2">Today</h4>
              <div className="bg-uniquest-gray rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-uniquest-gray-light p-2 rounded-lg">
                      <img 
                        src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736521576/arrow_up_jhouoo.png"
                        alt="Top Up"
                        className="w-4 h-4"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Wallet Top-Up</p>
                      <p className="text-xs text-gray-400">01 Jun, 2023 • 12:04 AM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-500 font-medium">₦20,000.00</p>
                    <p className="text-xs text-green-500">• Successful</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-400 text-sm mb-2">Yesterday</h4>
              <div className="space-y-4">
                <div className="bg-uniquest-gray rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-uniquest-gray-light p-2 rounded-lg">
                        <img 
                          src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736521480/arrow_down_hlkid0.png"
                          alt="Withdrawal"
                          className="w-4 h-4"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Withdrawal from wallet</p>
                        <p className="text-xs text-gray-400">01 Jun, 2023 • 12:04 AM</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-red-500 font-medium">₦20,000.00</p>
                      <p className="text-xs text-green-500">• Successful</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-uniquest-gray rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-uniquest-gray-light p-2 rounded-lg">
                        <img 
                          src="https://res.cloudinary.com/dlqzokzi3/image/upload/v1736521480/arrow_down_hlkid0.png"
                          alt="Transfer"
                          className="w-4 h-4"
                        />
                      </div>
                      <div>
                        <p className="font-medium">You sent money to <span className="text-blue-500">@Ruby</span></p>
                        <p className="text-xs text-gray-400">01 Jun, 2023 • 12:04 AM</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-red-500 font-medium">₦20,000.00</p>
                      <p className="text-xs text-green-500">• Successful</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TransferModal isOpen={isTransferOpen} onOpenChange={setIsTransferOpen} />
      <WithdrawalModal isOpen={isWithdrawalOpen} onOpenChange={setIsWithdrawalOpen} />
      <TopUpModal isOpen={isTopUpOpen} onOpenChange={setIsTopUpOpen} />
      <BottomNavigation onAddClick={() => {}} />
    </div>
  );
};

export default TreasuryScreen;